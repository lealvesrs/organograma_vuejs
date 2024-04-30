<template>
    <Alert :overlay="overlay" :title="message.title" :type="message.type"></Alert>

    <v-form @submit.prevent ref="form">
        <v-text-field v-model="nome" :rules="rules" label="Nome do time"></v-text-field>

        <div class="cores d-sm-flex">
            <ColorPicker title="Cor primária" :model="primaria" @color="(val) => primaria=val"></ColorPicker>
            <ColorPicker title="Cor secundária" :model="secundaria" @color="(val) => secundaria=val"></ColorPicker>
            
        </div>


        <v-btn type="submit" class="mt-2" size="large" color="indigo-darken-3" block
            @click="cadastrar">Cadastrar</v-btn>
    </v-form>

</template>

<script>
export default {
    data: () => ({
        nome: '',
        primaria: '#5C6BC0',
        secundaria: '#E8F8FF',
        overlay: false,
        message: [],
        times: [],
        rules: [
            value => {
                if (value) return true

                return 'Preencha esse campo'
            },
        ],
    }),
    methods: {
        async cadastrar() {
            const { valid } = await this.$refs.form.validate()

            if (valid) {
                this.times.push({ nome: this.nome, corPrimaria: this.primaria, corSecundaria: this.secundaria });
                localStorage.setItem("times", JSON.stringify(this.times));
                this.showMessage(true) 

            } else {
                this.showMessage(false)
            } 
        },

        showMessage(status) {
            this.message = status ? { type: "success", title: "Cadastrado com sucesso" }
                : { type: "error", title: "Erro ao cadastrar" };

            this.overlay = !this.overlay
        },
    },
    watch: {
        overlay(val) {
            val && setTimeout(() => {
                this.overlay = false
            }, 1000)
        },
    },
    mounted() {
        if (localStorage.times) {
            this.times = JSON.parse(localStorage.getItem("times"));
        }
        console.log(this.times)
    },
}
</script>

<style scoped lang="scss">
.cores {
    justify-content: space-between;
    gap: 50px;
}
</style>
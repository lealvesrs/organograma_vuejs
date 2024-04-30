<template>
    <Alert :overlay="overlay" :title="message.title" :type="message.type"></Alert>

    <v-form @submit.prevent ref="form" >
        <v-text-field v-model="nome" :rules="rules" label="Nome"></v-text-field>

        <v-text-field v-model="cargo" :rules="rules" label="Cargo"></v-text-field>

        <v-text-field v-model="img" :rules="rules" label="Foto"></v-text-field>

        <v-select v-model="select" :items="nomeTimes" :rules="[v => !!v || 'Selecione um time']" label="Time"
            required></v-select>

        <v-btn type="submit" class="mt-2" size="large" color="indigo-darken-3" block
            @click="cadastrar">Cadastrar</v-btn>
    </v-form>

</template>

<script>
export default {
    data: () => ({
        nome: '',
        cargo: '',
        img: '',
        times: [],
        nomeTimes: [],
        overlay: false,
        message: [],
        select: '',
        colaboradores: [],
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
                this.colaboradores.push({ nome: this.nome, cargo: this.cargo, img: this.img, time: this.select });
                localStorage.setItem("colaboradores", JSON.stringify(this.colaboradores));
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

         reset(){
            this.$refs.form.reset()
            this.$refs.form.resetValidation()
        }
    },
    watch: {
        overlay(val) {
            val && setTimeout(() => {
                this.overlay = false
                this.reset()
            }, 1000)
            
        },
    },
    mounted() {
        if (localStorage.times) {
            this.times = JSON.parse(localStorage.getItem("times"));

            this.times.forEach(t => {
                this.nomeTimes.push(t.nome)
            });

            this.nomeTimes.sort()
        }

        if (localStorage.colaboradores) {
            this.colaboradores = JSON.parse(localStorage.getItem("colaboradores"));
        }
    },
}
</script>
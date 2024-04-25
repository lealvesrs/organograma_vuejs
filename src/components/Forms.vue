<template>
    <v-form>
        <v-text-field v-model="nome" :rules="rules" label="Nome"></v-text-field>

        <v-text-field v-model="cargo" :rules="rules" label="Cargo"></v-text-field>

        <v-text-field v-model="img" :rules="rules" label="Foto"></v-text-field>

        <v-select v-model="select" :items="items" :rules="[v => !!v || 'Selecione um time']" label="Time"
            required></v-select>

        <v-btn class="mt-2" size="large" type="submit" color="indigo-darken-3" block @click="cadastrar">Cadastrar</v-btn>
    </v-form>

</template>

<script>
export default {
    data: () => ({
        nome: '',
        cargo: '',
        foto: '',
        items: [
            'Item 1',
            'Item 2',
            'Item 3',
            'Item 4',
        ],
        rules: [
            value => {
                if (value) return true

                return 'Preencha esse campo'
            },
        ],
    }),
    methods:{
        cadastrar(){
            console.log("aaa");
        }
    }
}
</script>
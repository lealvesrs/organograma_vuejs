<template>
    <v-container class="fill-height">
        <v-responsive class="align-center fill-height mx-auto" max-width="70%">

            <div class="text-center pb-12">
                <div class="text-body-2 font-weight-light mb-n1">
                    <v-icon icon="mdi mdi-account-multiple-plus" size="35"></v-icon>
                </div>

                <h1 class="text-h4 text-md-h2 font-weight-bold">Cadastrar colaborador</h1>
            </div>

            <Forms @add="showMessage"></Forms>
            <Alert :overlay="overlay" :title="message.title" :type="message.type"></Alert>

            <div class="text-center text-body-2 font-weight-light mb-n1 mt-8">
                <router-link to="/times"><v-icon icon="mdi mdi-eye" class="px-3"  size="18"></v-icon> VER TIMES</router-link>
            </div>
        </v-responsive>
    </v-container>

</template>

<script>
export default {
    data: () => ({
        overlay: false,
        message: [],

    }),
    methods: {
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
}
</script>
<style scoped>
a {
    color: white;
    text-decoration: none;
}
</style>

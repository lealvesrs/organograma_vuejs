<template>
    <v-container class="fill-height">
        <v-responsive class="align-center fill-height mx-auto" max-width="70%">

          <TitlePage title="Cadastrar time" icon="mdi mdi-view-grid-plus"></TitlePage>

            <FormsTime></FormsTime>
            <BtnVerTimes></BtnVerTimes>
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

<template>
    <back-button></back-button>
    <v-container class="fill-height">
        <v-responsive class="align-center fill-height mx-auto" max-width="70%">

            <title-page title="Cadastrar time" icon="mdi mdi-view-grid-plus"></title-page >

            <form-team></form-team>
            <btn-show-team></btn-show-team>
        </v-responsive>
    </v-container>

</template>

<script>
import FormTeam from '@/components/forms/FormTeam.vue';
import TitlePage from '@/components/TitlePage.vue';
export default {
    components: { FormTeam, TitlePage },
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

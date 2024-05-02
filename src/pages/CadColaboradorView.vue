<template>
    <back-button class="position-absolute"></back-button>
    <v-container class="fill-height">
        <v-responsive class="align-center fill-height mx-auto" max-width="70%">
            <title-page title="Cadastrar colaborador" icon="mdi mdi-account-multiple-plus"></title-page>
            <form-employee></form-employee>
            <btn-show-team></btn-show-team>

        </v-responsive>
    </v-container>

</template>


<script>
import BackButton from '@/components/buttons/BackButton.vue';
import TitlePage from '@/components/TitlePage.vue';

export default {
    components: { BackButton, TitlePage },
}
</script>

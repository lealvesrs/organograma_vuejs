<template>
    <back-button class="position-absolute"></back-button>
    <v-container class="fill-height">
        <v-responsive class="align-center fill-height mx-auto" max-width="70%">

            <title-page title="Cadastrar time" icon="mdi mdi-view-grid-plus"></title-page>

            <form-team></form-team>
            <btn-show-team></btn-show-team>
        </v-responsive>
    </v-container>

</template>

<script>
import { ref, watch } from 'vue';
export default {
    setup() {
        let overlay = ref(false);

        watch(overlay,(val)=>{
            val && setTimeout(() => {
                this.overlay = false
            }, 1000)
        })
    }
}
</script>
<style scoped>
a {
    color: white;
    text-decoration: none;
}
</style>

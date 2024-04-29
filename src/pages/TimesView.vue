<template>
    <v-container class="fill-height">
        <CardColaborador v-for="c in colaboradores" :key="c.nome"/>

    </v-container>
</template>
<script>
export default {
    data: () => ({
        colaboradores: [],
    }),
    mounted() {
        if (localStorage.colaboradores) {
            this.colaboradores = JSON.parse(localStorage.getItem("colaboradores"));
        }
        console.log(this.colaboradores)
    },

}
</script>
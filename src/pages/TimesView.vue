<template>
    <BackButton></BackButton>
    <v-container class="fill-height" v-if="times.length > 0">
        <ContainerTime v-for="(time, index) in times" :key="index" :data="time"></ContainerTime>
    </v-container>

    <v-container v-else class="fill-height justify-center">
        <div>
            <empty-message class="text-white" title="Nenhum time foi adicionado"></empty-message>
            <btn-go-to title="Adicionar novo time" path="/cadTimes"></btn-go-to>
        </div>
    </v-container>


</template>

<script>
import BtnCadastrar from '@/components/BtnGoTo.vue';
export default {
    components: { BtnCadastrar },
    data() {
        return {
            times: [],
        }
    },
    methods: {
        confirmRemove() {
        }
    },
    mounted() {
        if (localStorage.times) {
            this.times = JSON.parse(localStorage.getItem("times"));
        }
    }
}
</script>

<style scoped>
.v-container {
    margin: 0;
    max-width: 100%;
}
</style>
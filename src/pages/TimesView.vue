<template>
    <back-button></back-button>
    <v-container class="fill-height" v-if="times.length > 0">
        <team-container v-for="(time, index) in times" :key="index" :data="time"></team-container>
    </v-container>

    <v-container v-else class="fill-height justify-center">
        <div>
            <empty-message class="text-white" title="Nenhum time foi adicionado"></empty-message>
            <btn-go-to title="Adicionar novo time" path="/cadTimes"></btn-go-to>
        </div>
    </v-container>


</template>

<script>

import { onMounted, ref } from 'vue';
export default {
    setup() {
        let times = ref([])

        onMounted(() => {
            if (localStorage.times) {
                times.value = JSON.parse(localStorage.getItem("times"));
            }
        })
        return {
            times
        }
    },


}
</script>

<style scoped>
.v-container {
    margin: 0;
    max-width: 100%;
}
</style>
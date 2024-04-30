<template>
    <v-container class="fill-height">
        <ContainerTime v-for="(time, index) in times" :key="index" :data="time"></ContainerTime>

    </v-container>
</template>

<script>
export default {
    data(){
        return{
            times:[],
        }
    },
    methods:{
        confirmRemove(){
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
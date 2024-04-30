<template>
    <v-container class="align-center container">
            <div class="title">
                <h2 class="text-h5 font-weight-bold text-center">Programação</h2>
            </div>
            <div class="time">
                <CardColaborador color="#82CFFA" v-for="c in colaboradores" :key="c.nome" :data="c"/>
            </div>
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

<style scoped>

.container{
    height: 80%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    background-color: #E8F8FF;
}

.title{
    border-bottom: 3px solid #82CFFA;
    color: black;
}
.time {
    width: 100%;
    gap: 15px;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}



</style>
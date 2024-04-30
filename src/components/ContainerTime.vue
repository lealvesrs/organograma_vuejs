<template>
    <v-container v-if="colaboradores.length>0" class="align-center container" :style="backgroundColor(data.corSecundaria)">
            <div class="title" :style="borderColor(data.corPrimaria)">
                <h2 class="text-h5 font-weight-bold text-center">{{data.nome}}</h2>
            </div>
            <div class="time" >
                <CardColaborador :color="data.corPrimaria" v-for="c in colaboradores" :key="c.nome" :data="c" />
            </div>
        </v-container>
</template>

<script>
export default {
    data: () => ({
        colaboradores: [],
    }),
    props:{
        data:Object
    },
    methods:{
        backgroundColor(color){
            return {
                'background-color': `${color}`
            }
        },
        borderColor(color){
            return {
                'border-bottom': `3px solid ${color}`
            }
        }
    },
    mounted() {
        if (localStorage.colaboradores) {
            let colaboradoresGeral = JSON.parse(localStorage.getItem("colaboradores"));

            colaboradoresGeral.forEach(c => {
                if(c.time == this.data.nome){
                    this.colaboradores.push(c)
                }
            });
        }
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
    margin-bottom:10px !important; 
}

.title{
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
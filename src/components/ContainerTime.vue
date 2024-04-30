<template>
    <v-container class="align-center container" :style="backgroundColor(data.corSecundaria)">
        <div class="title" :style="borderColor(data.corPrimaria)">
            <h2 class="text-h5 font-weight-bold text-center">{{ data.nome }}</h2>
        </div>
        <div class="time" v-if="colaboradores.length > 0">
            <CardColaborador :color="data.corPrimaria" v-for="(c, index) in colaboradores" :key="index" :index="index"
                :data="c" @remove="removeItem"/>
        </div>
        <div v-else class="empty">
            <div class="text-body-2 font-weight-light mb-n1">
                <v-icon icon="mdi mdi-emoticon-sad-outline" size="35"></v-icon>
            </div>
            <h3>Nenhum colaborador adicionado ao time</h3>
        </div>
    </v-container>


</template>

<script>
export default {
    data: () => ({
        colaboradores: [],
        colaboradoresGeral: [],

    }),
    props: {
        data: Object,
    },
    methods: {
        removeItem(index) {
            let item = this.colaboradores[index]
               this.colaboradores.splice(index, 1);
            
               let indexGeral = this.colaboradoresGeral.findIndex((e) => e == item)
               this.colaboradoresGeral.splice(indexGeral, 1);
               localStorage.setItem('colaboradores', JSON.stringify(this.colaboradoresGeral)); 

        },
        backgroundColor(color) {
            return {
                'background-color': `${color}`
            }
        },
        borderColor(color) {
            return {
                'border-bottom': `3px solid ${color}`
            }
        }
    },
    computed: {
        itemsFromLocalStorage() {
            return JSON.parse(localStorage.getItem('colaboradores') || '[]');
        },
    },
    created() {
        this.colaboradoresGeral = this.itemsFromLocalStorage;
        this.colaboradoresGeral.forEach(c => {
            if (c.time == this.data.nome) {
                this.colaboradores.push(c)
            }
        });

    },

}
</script>

<style scoped>
.container {
    padding: 80px 50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px !important;
}

.title {
    color: black;
    margin-bottom: 20px;
}

.time {
    width: 100%;
    gap: 15px;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.empty {
    color: black;
    text-align: center;
}
</style>
<template>

    <v-container class="align-center container" :style="backgroundColor(data.corSecundaria)">
        <div class="title" :style="borderColor(data.corPrimaria)">
            <h2 class="text-h5 font-weight-bold text-center">{{ data.nome }}</h2>
        </div>
        <div class="time" v-if="colaboradores.length > 0">
            <card-employee :color="data.corPrimaria" v-for="(c, index) in colaboradores" :key="index" :index="index"
                :data="c" @remove="removeItem" />
        </div>
        <div v-else><empty-message title="Nenhum colaborador adicionado ao time"></empty-message>
            <btn-go-to title="Adicionar novo colaborador" path="/cadColaborador"></btn-go-to>
        </div>
    </v-container>


</template>

<script>
import { ref, onBeforeMount, computed } from 'vue';
export default {
    props: {
        data: Object,
    },

    setup(props) {
        let colaboradores = ref([]);
        let colaboradoresGeral = ref([]);

        onBeforeMount(() => {
            colaboradoresGeral = itemsFromLocalStorage;
            colaboradoresGeral.value.forEach(c => {
                if (c.time == props.data.nome) {
                    colaboradores.value.push(c)
                }
            });

        });

        function removeItem(index) {
            let item = colaboradores.value[index]
            colaboradores.value.splice(index, 1);

            let indexGeral = colaboradoresGeral.value.findIndex((e) => e == item)
            colaboradoresGeral.value.splice(indexGeral, 1);
            localStorage.setItem('colaboradores', JSON.stringify(colaboradoresGeral.value));

        };
        function backgroundColor(color) {
            return {
                'background-color': `${color}`
            }
        };
        function borderColor(color) {
            return {
                'border-bottom': `3px solid ${color}`
            }
        }

        const itemsFromLocalStorage = computed(() => {
            return JSON.parse(localStorage.getItem('colaboradores') || '[]');
        })

        return {
            borderColor,
            backgroundColor,
            removeItem,
            colaboradores

        }
    }




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
</style>
<template>
    <div class="card">
        <div class="cabecalho" :style="backgroundStyles(color)">
            <v-btn variant="text"><v-icon icon="mdi mdi-delete" @click="remove"></v-icon></v-btn>
            <v-img class="mx-auto rounded-circle imagem" aspect-ratio="1" cover :lazy-src="data.img" :src="data.img">
                <template v-slot:error>
                    <v-img class="mx-auto" aspect-ratio="1" cover height="100" max-width="100"
                        src="../../assets/placeholder.jpg"></v-img>
                </template>

                <template v-slot:placeholder>
                    <div class="d-flex align-center justify-center fill-height">
                        <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
                    </div>
                </template>
            </v-img>
        </div>
        <div className='rodape'>
            <h4>{{ capitalize(data.nome) }}</h4>
            <h5>{{ capitalize(data.cargo) }}</h5>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        index: Number,
        data: Object,
        color: String
    },
    methods: {
        backgroundStyles(color) {
            return {
                'background-color': `${color}`
            }
        },
        remove(){
            this.$emit("remove",this.index)
        },
        capitalize(word) {
            let firstLetter = word.charAt(0).toUpperCase()

            let remainingLetters = word.slice(1).toLowerCase()

            let capitalizedWord = firstLetter + remainingLetters

            return capitalizedWord;
        }
    }
}
</script>

<style scoped lang="scss">
.card {
    width: 200px;

    .cabecalho {
        border-radius: 10px 10px 0px 0px;
        text-align: end;
    }


    .imagem {
        width: 100px;
        border-radius: 50%;
        position: relative;
        bottom: -50px;
    }

    .rodape {
        background: #FFFFFF;
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
        border-radius: 0px 0px 10px 10px;
        padding-top: 90px;
        padding-bottom: 40px;
        text-align: center;

        h4 {
            color: #6278F7;
            font-size: 18px;
            line-height: 22px;
            font-weight: bold;
            margin-bottom: 8px;
        }

        h5 {
            font-size: 18px;
            line-height: 22px;
            color: #212121;
            padding: 0 16px;
        }
    }
}
</style>
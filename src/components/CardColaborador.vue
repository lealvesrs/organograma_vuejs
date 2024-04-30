<template>
    <div class="card">
        <div class="cabecalho" :style="backgroundStyles(color)">
            <v-img class="mx-auto rounded-circle imagem" height="100" width="100" src="https://bad.src/not/valid">
                <template v-slot:error>
                    <v-img class="mx-auto" height="100" max-width="100" src="../assets/placeholder.jpg"></v-img>
                </template>
            </v-img>
        </div>
        <div className='rodape'>
            <h4>{{ data.nome }}</h4>
            <h5>{{ data.cargo }}</h5>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: Object,
        color: String
    },
    methods: {
         backgroundStyles(color){
            return {
                'background-color': `${color}`
            }
        }
    }
}
</script>

<style scoped lang="scss">
.card {
    width: 200px;

    .cabecalho {
        border-radius: 10px 10px 0px 0px;
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
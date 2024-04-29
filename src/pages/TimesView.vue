<template>
    <v-container class="fill-height">
        <v-card v-for="c in colaboradores" :key="c.nome" class="mx-auto" prepend-icon="$vuetify"
            subtitle="The #1 Vue UI Library" width="400">
            <template v-slot:title>
                <span class="font-weight-black">{{ c.nome }}</span>
            </template>

            <v-card-text class="bg-surface-light pt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore
                voluptatibus!
                Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde
                voluptatem!
            </v-card-text>
        </v-card>
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
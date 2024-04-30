<template>
    <router-link :to="path"><v-card class="py-4" color="indigo-darken-2" :prepend-icon="icon"
            rounded="lg" variant="flat">

            <template #title>
                <h2 class="text-md-h5 text-h6 font-weight-bold text-wrap">{{title}}</h2>
            </template>

            <template #subtitle>
                <div class="text-subtitle-1 text-wrap">
                    {{subtitle}}
                </div>
            </template>

        </v-card></router-link>
</template>

<script>
export default {
    props:{
        path:String,
        icon:String,
        title:String,
        subtitle:String
    }
}
</script>
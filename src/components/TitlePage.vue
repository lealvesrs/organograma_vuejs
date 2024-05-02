<template>
    <div class="text-center pb-12 mt-5">
                <div class="text-body-2 font-weight-light mb-n1">
                    <v-icon :icon="icon" size="35"></v-icon>
                </div>

                <h1 class="text-h4 text-md-h2 font-weight-bold">{{title}}</h1>
            </div>
</template>
<script>
export default {
    props:{
        title:String,
        icon:String
    }
}
</script>
<template>
    
    <div class="empty">
            <div class="text-body-2 font-weight-light mb-2">
                <v-icon icon="mdi mdi-emoticon-sad-outline" size="35"></v-icon>
            </div>
            <h3>{{ title }}</h3>
        </div>
</template>
<script>
export default {
   props:{
    title:String
   }
}
</script>


<style scoped>
.empty {
    color: black;
    text-align: center;
}
</style>
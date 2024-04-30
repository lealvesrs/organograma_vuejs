<template>
     <v-btn type="submit" class="mt-2" size="large" color="indigo-darken-3" block
            @click="verificaStatus">Cadastrar</v-btn>
</template>

<script>
export default {
    props:{
        status:Boolean
    },
    methods:{
        verificaStatus(){
            this.$emit("verificaStatus");
        }
    },
    watch: {
        status(val) {
            if(val==true){
                alert("aaaaaaaaaaa")
            }else{
                alert("bbbbbb")
            }
        },
    },
}
</script>
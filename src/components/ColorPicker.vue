<template>
    <div class="div-interno" :style="checkWidth()">
        <h3 class="text-disabled font-weight-regular">Cor primária</h3>
        <v-color-picker hide-canvas v-model="modelValue" width="100%" mode="hexa"></v-color-picker>
    </div>
</template>
<script>
export default {
    data(){
        return{
            modelValue: ""
        }
        
    },
    props:{
        model: String,
    },
    methods:
    {
        checkWidth() {
            if (this.$vuetify.display.mobile) {
                return 'width: 100%'
            } else {
                return 'width:50%'
            }
        }
    },
    mounted() {
       this.modelValue = this.model
    },
    watch: {
        modelValue(val) {
            this.$emit("color",val)
        },
    },
    
}
</script>

<style scoped>
.div-interno {
    text-align: center;
    padding-bottom: 20px;
}
</style>
<template>
    <div class="div-interno" :style="checkWidth()">
        <h3 class="text-disabled font-weight-regular">Cor primária</h3>
        <v-color-picker hide-canvas v-model="modelValue" width="100%" mode="hexa"></v-color-picker>
    </div>
</template>
<script>
import { useDisplay } from 'vuetify';
import { ref, watch } from 'vue';
export default {
    props: {
        model: String,
    },
    setup(props, { emit }) {
        const { mobile } = useDisplay()
        let modelValue = ref(props.model)

        function checkWidth() {
            return mobile.value ? 'width: 100%' : 'width:50%'
        }

        watch(modelValue, (val)=>{
            emit("color",val)
        })

        return {
            modelValue,
            checkWidth
        }

    },

}
</script>

<style scoped>
.div-interno {
    text-align: center;
    padding-bottom: 20px;
}
</style>
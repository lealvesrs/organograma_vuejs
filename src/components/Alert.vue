<template>
    <div class="text-center d-flex justify-center">


        <v-overlay v-model="insideOverlay" class="align-center justify-center">
            <v-alert :title="title" :type="type"></v-alert></v-overlay>
    </div>

</template>
<script>
import { ref, watch} from 'vue';
export default {
    props: {
        overlay: Boolean,
        type: String,
        title: String
    },
    setup(props) {
        let insideOverlay = ref(props.overlay);

        watch(() => props.overlay, (newValue) => {
            insideOverlay.value = newValue;
        });


        return {
            insideOverlay
        };
    }
}
</script>
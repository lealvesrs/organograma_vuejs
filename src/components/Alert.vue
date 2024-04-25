<template>
    <div class="text-center d-flex justify-center">


        <v-overlay v-model="insideOverlay" class="align-center justify-center">
            <v-alert :title="title" :type="type"></v-alert></v-overlay>
    </div>

</template>
<script>
export default {
    data: () => ({
        insideOverlay: false,
    }),
    props: {
        overlay: Boolean,
        type: String,
        title: String
    },
    watch: {
        overlay() {
            this.insideOverlay = this.overlay
        },
    },
}
</script>
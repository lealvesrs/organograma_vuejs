<template>

    <v-btn @click="goTo" class="mt-2" size="large" color="indigo-darken-3" block>{{ title
        }}</v-btn>


</template>

<script>
export default {
    props: {
        title: String,
        path: String
    },
    methods: {
        goTo() {
            this.$router.push({ path: this.path })
        }
    },

}
</script>
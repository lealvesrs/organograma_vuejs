<template>

    <v-btn @click="goTo" class="mt-2" size="large" color="indigo-darken-3" block>{{ title
        }}</v-btn>


</template>

<script>
import { useRouter } from 'vue-router'
export default {
    props: {
        title: String,
        path: String
    },

    setup(props) {
        const router = useRouter()
        function goTo() {
            router.push({ path: props.path })
        }

        return{
            goTo
        }
    }


}
</script>
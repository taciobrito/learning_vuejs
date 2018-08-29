<template>
    <div>
        <div v-if="preloader" class="preloader">
            <img src="../../assets/loading.gif" alt="Carregando...">
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            preloader : {
                type: Boolean,
                required: true, 
                default: false
            }
        },
        data () {
            return {
            }
        }
    }
</script>

<style scoped>
    .preloader img {
        max-width: 70px;
    }
</style>

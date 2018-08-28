<template>
    <div class="alert alert-danger">
        <h1 v-text="title"></h1>
        <p>Erro na resposta!</p>

        <button class="btn btn-warning" @click.prevent="nextQuestion">Próxima Pergunta</button>
    </div>
</template>


<script>
export default {
    data () {
        return {
            title: 'Errou!'
        }
    },
    methods: {
        nextQuestion () {
            this.$emit('changeMode');
        }
    }
}
</script>

<style scoped>

</style>


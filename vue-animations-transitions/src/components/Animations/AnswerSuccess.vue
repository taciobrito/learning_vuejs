<template>
    <div class="alert alert-success">
        <h1 v-text="title"></h1>
        <p>Sucesso na resposta!</p>

        <button class="btn btn-warning" @click.prevent="nextQuestion">Próxima Pergunta</button>
    </div>
</template>


<script>
export default {
    data () {
        return {
            title: 'Sucesso!'
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


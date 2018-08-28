<template>
    <div>
        <h2>{{ title }}</h2>

        <p>Parâmetro: {{ id }}</p>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            title: 'Lista de Tarefas'
        }
    }
}
</script>

<style scoped>

</style>



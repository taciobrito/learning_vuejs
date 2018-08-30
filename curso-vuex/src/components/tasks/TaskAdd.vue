<template>
    <div>
        <h1>{{ title }}</h1>

        <form @submit.prevent="onSubmit">
            <input type="text" placeholder="Nome da Tarefa" v-model="task.name">
            <button type="submit">Adicionar</button>
        </form>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                title: 'Adicionar Tarefa',
                task: {
                    name: '',
                    completed: false
                }
            }
        },
        methods: {
            onSubmit () {
                // this.$store.commit('ADD_TASK', this.task)

                this.$store.dispatch('addTask', this.task)

                this.task = {
                    name: '',
                    completed: false
                }
            }
        }
    }
</script>

<style scoped>

</style>

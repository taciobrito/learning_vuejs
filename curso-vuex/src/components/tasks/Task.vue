<template>
    <div>
        <h1>{{ title }}</h1>

        <task-add></task-add>

        <ul>
            <li v-for="(task, index) in getTasksSorted" :key="index" :class="{ 'completed' : task.completed }">
                <a href="#" @click.prevent="completedTask(task)">Toogle</a>
                {{ task.name }}
            </li>
        </ul>
    </div>
</template>

<script>
    import TaskAdd from './TaskAdd'

    export default {
        data () {
            return {
                title: 'Lista de Tarefas'
            }
        },
        methods: {
            completedTask(task) {
                // this.$store.commit('TOOGLE_TASK', task)

                this.$store.dispatch('toogleTask', task)
            }
        },
        computed: {
            getTasks () {
                return this.$store.state.tasks
            },
            getTasksSorted () {
                return this.$store.getters.sortedTasks
            }
        },
        components: {
            TaskAdd
        }
    }
</script>

<style scoped>
    .completed {
        background: green;
    }
</style>

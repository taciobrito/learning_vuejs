<template>
  <div id="app">
    <router-link to="/">Início</router-link>
    <router-link to="/tasks">Tarefas ({{ totalTasksNotCompleted +'/'+ totalTasks}})</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  computed: {
    totalTasksNotCompleted () {
      return this.$store.getters.tasksNotCompleted.length
    },
    totalTasks () {
      return this.$store.state.Tasks.tasks.length
    }
  }
}
</script>

<style>

</style>

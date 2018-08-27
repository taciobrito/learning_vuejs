<template>
  <div id="app">
    <h1>{{ msg }}</h1>

    <tasks-component @calledParent="answerSon" :title="'Lista de Tarefas'" :items="tasks"></tasks-component>
    <list-items-component :title="'Listagem de algo'" :items="['Val 1', 'Val 2', 'Val 3']"></list-items-component>
  </div>

</template>

<script>
import TasksComponent from './components/TasksComponent'
import ListItemsComponent from './components/ListItemsComponent'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tasks: ['Lavar', 'Passar', 'Cozinhar']
    }
  },
  components: {
    TasksComponent,
    ListItemsComponent
  },
  methods: {
    answerSon (task) {
      this.tasks.push(task)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

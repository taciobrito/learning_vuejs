<template>
  <div id="app" class="comp">
    <h1>{{ title }}</h1>
    Teste {{ msg }}

    <test-component></test-component>
    <form-component></form-component>
    <task-component></task-component>
  </div>
</template>

<script>
import TestComponent from './components/TestComponent'
import FormComponent from './components/FormComponent'
import TaskComponent from './components/TaskComponent'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Curso de Vue.js App',
      title: 'App Component'
    }
  },
  components: {
    TestComponent,
    FormComponent,
    TaskComponent
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
.comp {
  border: 1px solid #00f; margin: 5px; padding: 5px;
}
</style>

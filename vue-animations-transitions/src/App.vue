<template>
  <div id="app" class="container text-center">
    <app-quiz></app-quiz>

    <!-- <button @click.prevent="show = !show">Mostrar</button> -->

    <!-- <transition name="teste">
      <div v-if="show">Mostrando...</div>
    </transition> -->
  </div>
</template>

<script>
import Quiz from './components/Animations/Quiz';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show: false
    }
  }, 
  
  components : {
    'app-quiz': Quiz
  }
}
</script>

<style>
  .teste-enter-active, .teste-leave-active {
    transition: opacity 1.5s;
  }
  .teste-enter, .teste-leave-to {
    opacity: 0;
  }
</style>

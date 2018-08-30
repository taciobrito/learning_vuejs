import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/Home'
import Task from '../components/tasks/Task'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/tasks', component: Task, name: 'tasks' }
]

export default new VueRouter({
  mode: 'history',
  routes
})


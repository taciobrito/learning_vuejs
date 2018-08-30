import Vue from 'vue'
import Vuex from 'vuex'
import Tasks from './modules/Tasks/store'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Tasks
    }
})

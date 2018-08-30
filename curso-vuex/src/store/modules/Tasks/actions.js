const actions = {
    addTask (context, task) {
        // .. ajax
        context.commit('ADD_TASK', task)
    },
    toogleTask (context, task) {
        // ajax
        context.commit('TOOGLE_TASK', task)
    }
}

export default actions
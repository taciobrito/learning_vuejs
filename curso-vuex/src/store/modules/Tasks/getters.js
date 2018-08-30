const getters = {
    sortedTasks (state) {
        var sorted = state.tasks
        return sorted.sort((a, b) => {
            if (a.name < b.name) return -1
            if (a.name > b.name) return 1

            return 0
        })
    },
    tasksNotCompleted (state) {
        var tasks = state.tasks

        var tasksNotCompleted = tasks.filter(task => {
            return !task.completed
        })

        return tasksNotCompleted
    }
}

export default getters
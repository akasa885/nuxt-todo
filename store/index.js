export const state = () => ({
    tasks: [],
})

export const mutations = {
    addTask(state, task) {
        // bring new task to the top of the list, then add the rest of the tasks
        state.tasks = [{content: task, completed: false}, ...state.tasks]
    },
    removeTask(state, task) {
        state.tasks = state.tasks.filter(t => t !== task) //OR
        // state.tasks.splice(state.tasks.indexOf(task), 1)
    },
    toggleTask(state, task) {
        task.completed = !task.completed
    },
    saveTasks(state) {
        localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    loadTasks(state) {
        const tasks = localStorage.getItem('tasks')
        if (tasks) {
            state.tasks = JSON.parse(tasks)
        }
    }
}
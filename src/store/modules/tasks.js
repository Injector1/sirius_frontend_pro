export default {
    actions: {
        async fetchTasks(ctx, limit = 20) {
            const res = await fetch(
                'https://jsonplaceholder.typicode.com/todos?_limit=' + limit
            )
            const tasks = await res.json()

            ctx.commit('updateTasks', tasks)
        }
    },
    mutations: {
        updateTasks(state, tasks) {
            let userTasks = state.tasks.filter(e => e.userId === 0)
            state.tasks = [...tasks, ...userTasks]
        },
        createTask(state, newTask) {
            state.tasks.push(newTask)
        },
        changeTaskStatus(state, taskId) {
            state.tasks[taskId - 1].completed = !state.tasks[taskId - 1].completed
        }
    },
    state: {
        tasks: []
    },
    getters: {
        allTasks(state) {
            return state.tasks
        },
        tasksDone(state) {
            return state.tasks.filter(e => e.completed).length
        },
        tasksNumber(state) {
            return state.tasks.length
        }
    }

}
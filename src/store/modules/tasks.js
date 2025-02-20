// store/modules/tasks.js
const state = {
  tasks: [],
}

const mutations = {
  SET_TASKS(state, tasks) {
    state.tasks = tasks
  },
  ADD_TASK(state, task) {
    state.tasks.push(task)
  },
  REMOVE_TASK(state, taskId) {
    state.tasks = state.tasks.filter((task) => task.id !== taskId)
  },
  UPDATE_TASK(state, updatedTask) {
    const index = state.tasks.findIndex((task) => task.id === updatedTask.id)
    if (index !== -1) {
      state.tasks[index] = updatedTask
    }
  },
}

const actions = {
  teste({ commit }) {
    console.log('teste')
  },

  fetchTasks({ commit }) {
    return new Promise((resolve, reject) => {
      fetch('http://127.0.0.1:8000/api/tasks', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('user_token')}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            commit('SET_TASKS', data.data)
            resolve()
          } else {
            reject(new Error(data.message))
          }
        })
        .catch((error) => {
          reject(new Error(error))
        })
    })
  },

  addTask({ commit }, form) {
    const formData = new FormData(form)

    return new Promise((resolve, reject) => {
      fetch('http://127.0.0.1:8000/api/tasks', {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('user_token')}`, // Add the Bearer token here
        },
      })
        .then((response) => response.json())
        .then((data) => {
          form.reset()
          if (data.success) {
            commit('ADD_TASK', data.data)
            resolve()
          } else {
            reject(new Error(data.message))
          }
        })
    })
  },

  removeTask({ commit }, taskId) {
    return new Promise(async (resolve, reject) => {
      fetch(`http://127.0.0.1:8000/api/tasks/${taskId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('user_token')}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            commit('REMOVE_TASK', taskId)
            resolve()
          } else {
            reject(new Error(data.message))
          }
        })
        .catch((error) => {
          reject(new Error(error))
        })
    })
  },

  updateTask({ commit }, data) {
    return new Promise(async (resolve, reject) => {
      const formData = new URLSearchParams()

      for (const key in data) {
        formData.append(key, data[key])
      }

      fetch(`http://127.0.0.1:8000/api/tasks/${data.id}`, {
        method: 'PUT',
        body: formData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${localStorage.getItem('user_token')}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            commit('UPDATE_TASK', data.data[0])
            resolve()
          } else {
            reject(new Error(data.message))
          }
        })
        .catch((error) => {
          reject(new Error(error))
        })
    })
  },
}

const getters = {
  allTasks: (state) => state.tasks,
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}

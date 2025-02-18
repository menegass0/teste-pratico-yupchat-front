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
}

const actions = {
  teste({ commit }) {
    console.log('teste')
  },

  async fetchTasks({ commit }) {
    await fetch('http://127.0.0.1:8000/api/tasks', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('user_token')}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          commit('SET_TASKS', data.data)
          console.log(data.data)
        } else {
          reject(new Error(data.message))
        }
      })
      .catch((error) => {
        reject(error)
      })
  },

  async addTask({ commit }, form) {
    const formData = new FormData(form)

    await fetch('http://127.0.0.1:8000/api/tasks', {
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
        } else {
          throw new Error('Usuário não Autenticado')
        }
      })
  },

  async removeTask({ commit }, taskId) {
    await fetch(`http://127.0.0.1:8000/api/tasks/${taskId}`, {
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
        }
      })
      .catch((error) => {
        console.error('Error:', error)
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

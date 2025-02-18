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
        reject(new Error(data.message))
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

  async updateTask({ commit }, data) {
    const formData = new URLSearchParams()

    for (const key in data) {
      formData.append(key, data[key])
    }

    await fetch(`http://127.0.0.1:8000/api/tasks/${data.id}`, {
      method: 'PUT',
      body: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${localStorage.getItem('user_token')}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('res', data.data)
        if (data.success) {
          commit('UPDATE_TASK', data.data)
        } else {
          console.error('Failed to update task')
        }
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  },

  // updateTask ({commit}, id, formData)  {
  //     fetch(`http://127.0.0.1:8000/api/tasks/${id}`, {
  //       method: 'PUT',
  //       body: formData,
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${localStorage.getItem('user_token')}`,
  //       },
  //     })
  //     .then(response => response.json())
  //     .then(data => {
  //       if (data.success) {
  //         commit('UPDATE_TASK', data.data)
  //       } else {
  //         console.error('Failed to update task');
  //       }
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //     });
  //   };
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

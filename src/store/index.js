// store/index.js
import { createStore } from 'vuex'
import tasks from './modules/tasks'

export default createStore({
  modules: {
    tasks,
  },
  actions: {
    teste({ commit }) {
      console.log('aaaaaaaaaaaaaaaaaaaaaa')
    },
  },
})

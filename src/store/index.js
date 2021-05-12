import Vue from 'vue'
import Vuex from 'vuex'

import auth from '@/store/modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null,
  },

  getters: {
    error: state => state.error,
  },

  mutations: {
    setError(state, error) {
      state.error = error
    },

    clearError(state) {
      state.error = null
    },
  },

  modules: {
    auth,
  },
})

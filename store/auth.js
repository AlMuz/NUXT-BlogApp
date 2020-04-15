/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
export const state = () => ({
  token: null
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  clearToken(state) {
    state.token = null
  }
}

export const actions = {
  async login({ commit, dispatch }, formData) {
    try {
      const { token } = this.$axios.$post('/api/auth/admin/login', formData)
      console.log(token)

      dispatch('setToken', token)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  async createUser({ commit }, formData) {
    try {
      console.log(formData)
    } catch (e) {}
  },
  setToken({ commit }, token) {
    commit('setToken', token)
  },
  logout({ commit }) {
    console.log(123)
    commit('clearToken')
  }
}

export const getters = {
  isAuthenticated: (state) => Boolean(state.token)
}

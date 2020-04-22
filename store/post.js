export const actions = {
  async fetchAdminPosts({ commit }) {
    try {
      return await this.$axios.$get('/api/post/admin')
    } catch (error) {
      commit('setError', error, { root: true })
      throw error
    }
  },
  async fetchPostById({ commit }, id) {
    try {
      return await this.$axios.$get(`/api/post/admin/${id}`)
    } catch (error) {
      commit('setError', error, { root: true })
      throw error
    }
  },
  async deletePost({ commit }, id) {
    try {
      return await this.$axios.$delete(`/api/post/admin/${id}`)
    } catch (error) {
      commit('setError', error, { root: true })
      throw error
    }
  },
  async updatePost({ commit }, { id, text }) {
    try {
      return await this.$axios.$put(`/api/post/admin/${id}`, { text })
    } catch (error) {
      commit('setError', error, { root: true })
      throw error
    }
  },
  async createPost({ commit }, { title, text, image }) {
    try {
      const formData = new FormData()

      formData.append('title', title)
      formData.append('text', text)
      formData.append('image', image, image.name)

      return await this.$axios.$post('/api/post/admin', formData)
    } catch (error) {
      commit('setError', error, { root: true })
      throw error
    }
  }
}

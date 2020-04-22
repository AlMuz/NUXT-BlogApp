const posts = [
  {
    _id: Math.floor(Math.random() * Math.floor(100)),
    title: 'Post',
    date: new Date(),
    views: 22,
    comments: [1, 2]
  },
  {
    _id: Math.floor(Math.random() * Math.floor(100)),
    title: 'Post2',
    date: new Date(),
    views: 223,
    comments: [1, 4]
  },
  {
    _id: Math.floor(Math.random() * Math.floor(100)),
    title: 'Post7',
    date: new Date(),
    views: 22,
    comments: [2, 2]
  }
]

/* eslint-disable no-empty-pattern */
export const actions = {
  async fetchAdminPosts({}) {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(posts)
      }, 1000)
    })
  },
  async fetchPostById({}, id) {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(posts.find((post) => (post._id = id)))
      }, 1000)
    })
  },
  async deletePost({}, id) {
    console.log(id)
  },
  async updatePost({}, { id, text }) {
    console.log(id)
    console.log(text)
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

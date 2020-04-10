export const actions = {
  async fetchAdminPosts() {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve([
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
        ])
      })
    })
  }
}

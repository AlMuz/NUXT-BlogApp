const Post = require('../models/post.model')

module.exports.createPost = async (req, res) => {
  const { title, text } = req.body
  const post = new Post({
    title,
    text,
    imageUrl: `/images/${req.file.filename}`
  })

  try {
    await post.save()
    res.status(201).json(post)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 })
    res.json(posts)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports.getPostById = async (req, res) => {
  try {
    await Post.findById(req.params.id)
      .populate('comments')
      .exec((error, post) => {
        res.json(post)
      })
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports.updatePost = async (req, res) => {
  const $set = {
    text: req.body.text
  }

  try {
    const post = await Post.findOneAndUpdate(
      { _id: req.params.id },
      { $set },
      { new: true }
    )
    res.json(post)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports.deletePost = async (req, res) => {
  try {
    await Post.deleteOne({ _id: req.params.id })
    res.json({ message: 'Post deleted' })
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports.postViewed = async (req, res) => {
  const $set = {
    views: ++req.body.views
  }
  try {
    await Post.findOneAndUpdate({ _id: req.params.id }, { $set })
    res.status(204).json()
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports.getAnalytics = async (req, res) => {
  try {
    const posts = await Post.find()

    const labels = posts.map((post) => post.title)

    const json = {
      comments: {
        labels,
        data: posts.map((post) => post.comments.length)
      },
      views: {
        labels,
        data: posts.map((post) => post.views)
      }
    }

    res.json(json)
  } catch (error) {
    res.status(500).json(error)
  }
}

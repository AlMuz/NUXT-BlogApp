const Comment = require('../models/comment.model')
const Post = require('../models/post.model')

module.exports.create = async (req, res) => {
  const { name, text, postId } = req.body
  try {
    const comment = new Comment({
      name,
      text,
      postId
    })

    await comment.save()

    const post = await Post.findById(postId)
    post.comments.push(comment._id)
    await post.save()

    res.status(201).json(comment)
  } catch (error) {
    res.status(500).json(error)
  }
}

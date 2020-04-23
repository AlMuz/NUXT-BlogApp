const passport = require('passport')
const { Router } = require('express')
const upload = require('../middleware/upload')
const controller = require('../controllers/post.controller')

const router = Router()

// admin
// /api/post/admin
router.post(
  '/admin/',
  passport.authenticate('jwt', {
    session: false
  }),
  upload.single('image'),
  controller.createPost
)

router.get(
  '/admin/',
  passport.authenticate('jwt', {
    session: false
  }),
  controller.getPosts
)

router.get(
  '/admin/:id',
  passport.authenticate('jwt', {
    session: false
  }),
  controller.getPostById
)

router.put(
  '/admin/:id',
  passport.authenticate('jwt', {
    session: false
  }),
  controller.updatePost
)

router.delete(
  '/admin/:id',
  passport.authenticate('jwt', {
    session: false
  }),
  controller.deletePost
)

// base
// /api/post/
router.get('/', controller.getPosts)

router.get('/:id', controller.getPostById)

router.put('/add/view/:id', controller.postViewed)

module.exports = router

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')

const authRoutes = require('./routes/auth.routes')
const postRoutes = require('./routes/post.routes')
const passportStrategy = require('./middleware/passport-strategy')
const keys = require('./keys')
const app = express()

mongoose
  .connect(keys.MONGO_URI, { dbName: 'blog' })
  .then(() => console.log('MONGO connected'))
  .catch((error) => console.log(error))

app.use(passport.initialize())
passport.use(passportStrategy)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api/auth', authRoutes)
app.use('/api/post', postRoutes)

module.exports = app

import UserSchema from './user.model'
import CommentSchema from './comment.model'
import ArticleSchema from './article.model'
import PhotoSchema from './photo.model'

import mongoose from 'mongoose';

const article = mongoose.model('article', ArticleSchema)
const comment = mongoose.model('comment', CommentSchema)
const user =  mongoose.model('user', UserSchema)
const photo = mongoose.model('photo', PhotoSchema)

export default {
  article,
  comment,
  user
}

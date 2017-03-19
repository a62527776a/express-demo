import UserSchema from './user.model';
import CommentSchema from './comment.model';
import ArticleSchema from './article.model';
import FileSchema from './file.model';

import mongoose from 'mongoose';

const article = mongoose.model('article', ArticleSchema);
const comment = mongoose.model('comment', CommentSchema);
const user =  mongoose.model('user', UserSchema);
const file = mongoose.model('file', FileSchema);

export default {
  article,
  comment,
  user,
  file
};

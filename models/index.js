// TODO: Require models and data.

const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// TODO: Build the relationshipns between the 3 models (user, post, comment)
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});
Comment.belongsTo(Post, {
  foreignKey: 'postId'
});

module.exports = { User, Post, Comment };

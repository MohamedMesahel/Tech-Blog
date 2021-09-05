const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// TODO: Build the relationshipns between the 3 models (user, post, comment)
User.hasMany(Post, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'userId'
});

User.hasMany(Comment, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});
Comment.belongsTo(User, {
  foreignKey: 'userId',
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

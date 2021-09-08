// TODO: Build comments API
const router = require('express').Router();
const { Comment, User, Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {

  try {
    const commentData = await Comment.findAll({
      include: [
        {
          model: User,
        },
        {
          model: Post,
        }
      ]

    });
    res.json(commentData);
  } catch (err) {
    res.status(500).json(err)
  }
})
router.post('/comment', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
      content: req.body.content,
      postId: req.body.postId,


    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

// TODO: Build Home-apiRoutes
const router = require('express').Router();
const { Post, User } = require('../models');

router.get('/', async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const postData = await Post.findAll({
      include: [
        // {
        //   model: Comment,
        //   attributes: ['id', 'content', 'date_created', 'user_id', 'postId'],
        //   include: {
        //     model: User,
        //     attributes: ['username']
        //   }
        // },
        {
          model: User,
          attributes: ['username']
        }
      ],
      // attributes: [
      //   'id',
      //   'title',
      //   'content',
      //   'date_created',
      // ],
      order: [
        ['date_created', 'DESC']
      ]

    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);
    // Pass serialized data and session flag into template?
    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// Login
router.get('/login', async (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('login');
});
// TODO: build Signup routes
router.get('/signup', async (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;

// Find one post using by primaryKey
// router.get('/post/:id', async (req, res) => {
//   try {
//     const postData = await Post.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const post = postData.get({ plain: true });

//     res.render('post', {
//       ...post,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
// router.get('/login', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/dashboard');
//     return;
//   }

//   res.render('login');
// });

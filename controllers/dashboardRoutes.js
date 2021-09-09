// TODO: Build the Dashboard route

const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/auth");

// TODO: Render Dashboard using async based on the mini project
router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                },
                {
                    model: Comment,
                }
            ],
            where: {
                user_id: req.session.user_id
            },
            attributes: [
                'id',
                'title',
                'content',
                'date_created',
            ],
            
        });

        const posts = postData.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, logged_in: true });


    } catch (err) {
        res.status(500).json(err);
    }
});

// TODO: Add new post
router.get('/createpost', withAuth, async (req, res) => {
    try {

        res.render('create-new', {
            logged_in: req.session.logged_in,
            layout: "dashboard"

        });

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', withAuth, async (req, res) => {
    try {

        const postData = await Post.findByPk(req.params.id);

        const post = postData.get({ plain: true });

        res.render('editpost', {
            post,
            logged_in: req.session.logged_in,
            layout: "dashboard",

        });

    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
// TODO: Render Dashboard without Async method for future references
// router.get("/", withAuth, (req, res) => {
//     Post.findAll({
//         where: {
//             userId: req.session.userId
//         }
//     })
//         .then(dbPostData => {
//             const posts = dbPostData.map((post) => post.get({ plain: true }));

//             res.render("all-posts-admin", {
//                 layout: "dashboard",
//                 posts
//             });
//         })
//         .catch(err => {
//             console.log(err);
//             res.redirect("login");
//         });
// });
// TODO: Add new post without Async method for future references
// router.get("/new", withAuth, (req, res) => {
//     res.render("new-post", {
//         layout: "dashboard"
//     });
// });
// TODO: Edit new post without Async method for future references
// router.get("/edit/:id", withAuth, (req, res) => {
//     Post.findByPk(req.params.id)
//         .then(dbPostData => {
//             if (dbPostData) {
//                 const post = dbPostData.get({ plain: true });

//                 res.render("edit-post", {
//                     layout: "dashboard",
//                     post
//                 });
//             } else {
//                 res.status(404).end();
//             }
//         })
//         .catch(err => {
//             res.status(500).json(err);
//         });
// });
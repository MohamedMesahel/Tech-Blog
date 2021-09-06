// TODO: Build Post API

const router = require("express").Router();
const { Post, Comment, User } = require("../../models");
const withAuth = require("../../utils/auth");

// GET all posts for homepage
router.get("/", async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {model: User,
                attributes: ['username']},
                {model: Comment,
                    attributes: ['username']}
            ],

        });
        res.json(postData);
    } catch (err) {
        res.status(500).json(err)
    }
});
// Rendering one Post
router.get('/:id', async (req, res) => {

    try {

        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Comment,
                    include: [
                        {
                            model: User,
                            attributes: ['username']
                        }
                    ]
                }
            ]
        });

        // const post = postData.get({ plain: true });

        // res.render('onePost', {
        //     post,
        //     logged_in: req.session.logged_in
        // });

    } catch (err) {

        res.status(500).json(err);
    }
});
// Create Posts using Async method
router.post("/", async (req, res) => {
    try {
        const postData = await Post.create({
            ...req.body,
            userId: req.params.user_id
        });
        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.update({
            title: req.body.title,
            content: req.body.content
        },
            {
                where: {
                    id: req.params.id
                }
            });

        res.status(200).json(postData);

    } catch (err) {
        res.status(400).json(err);
    }
});

// Delte Posts
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id
            }
        });

        res.status(200).json(postData);

    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
// Create Posts without Async method for future references
// router.post("/", withAuth, (req, res) => {
//     const body = req.body;
//     console.log(req.session.userId);
//     Post.create({ ...body, userId: req.session.userId })
//         .then(newPost => {
//             res.json(newPost);
//         })
//         .catch(err => {
//             res.status(400).json(err);
//         });
// });

// Update Posts
// Update Posts without Async method for future references
// router.put("/:id", withAuth, (req, res) => {
//     console.log(req.body, req.params.id)
//     Post.update(req.body, {
//         where: {
//             id: req.params.id
//         }
//     })
//         .then(affectedRows => {
//             if (affectedRows > 0) {
//                 res.status(200).end();
//             } else {
//                 res.status(404).end();
//             }
//         })
//         .catch(err => {
//             res.status(500).json(err);
//         });
// });
// Update Posts without Async method for future references
// router.delete("/:id", withAuth, (req, res) => {
//     console.log(req.body, req.params.id)
//     Post.destroy({
//         where: {
//             id: req.params.id
//         }
//     })
//         .then(affectedRows => {
//             if (affectedRows > 0) {
//                 res.status(200).end();
//             } else {
//                 res.status(404).end();
//             }
//         })
//         .catch(err => {
//             res.status(500).json(err);
//         });
// });


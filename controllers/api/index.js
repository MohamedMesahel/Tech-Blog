// TODO: Build index connections
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const postRoutes = require('./postRoutes');

// TODO: ask the router to use API routes
router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/posts', postRoutes);



module.exports = router;

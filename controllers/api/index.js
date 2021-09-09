// TODO: Build index connections
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
// The comment routes has been merged inside postroutes for better performance.
// TODO: ask the router to use API routes
router.use('/users', userRoutes);
router.use('/posts', postRoutes);



module.exports = router;

const router = require('express').Router();

const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboardRoutes');
const homeRoutes = require('./homeRoutes');
const postRoutes = require('./postRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/posts', postRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;

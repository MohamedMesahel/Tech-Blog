// TODO: require Sequelize and set up the einvironmet for JAWS DB
const router = require('express').Router();
// Require the router for the all application routes
const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboardRoutes');
const homeRoutes = require('./homeRoutes');
const postRoutes = require('./postRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/posts', postRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;

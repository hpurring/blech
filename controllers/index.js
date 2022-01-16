const router = require('express').Router();
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const postRoutes = require('./api/post-routes');

const apiRoutes = require('./api');

router.use('/dashboard', dashboardRoutes);

router.use('/create-post', postRoutes);

router.use('/api', apiRoutes);

router.use('/', homeRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;

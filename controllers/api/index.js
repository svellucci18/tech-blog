const router = require('express').Router();
const blogRoutes = require('./blog-routes');
const commentRoutes = require('./comment-routes');
const userRoutes = require('./userRoutes');

router.use('/blog', blogRoutes);
router.use('/comment', commentRoutes);
router.use('/users', userRoutes);


module.exports = router;
const router = require('express').Router();
const Blog = require('../models/Blog');
const withAuth = require('../utils/auth');

// route to get all blogs aka the landing page
router.get('/', withAuth, async (req, res) => {
    const blogData = await Blog.findAll().catch((err) => { 
        res.json(err);
      });
        // turns blog data into an array
        const blogs = blogData.map((blog) => blog.get({ plain: true }));
        res.render('all-blogs', { layout: 'dashboard', blogs }); // this routes to the dashboard layout instead of the main
      });
  
  // route to get one blog
  router.get('/blog/:id', withAuth, async (req, res) => {
    try{ 
        const blogData = await Blog.findByPk(req.params.id);
        if(!blogData) {
            res.status(404).json({message: 'No blog with this id!'});
            return;
        }
        const blog = blogData.get({ plain: true });
        res.render('blog', blog);
      } catch (err) {
          res.status(500).json(err);
      };     
  });

module.exports = router;

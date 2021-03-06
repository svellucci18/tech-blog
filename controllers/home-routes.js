const router = require('express').Router();
const Blog = require('../models/Blog');

// route to get all blogs aka the landing page
router.get('/', async (req, res) => {
  const blogData = await Blog.findAll().catch((err) => { 
      res.json(err);
      });
        // this clients const is passed in the handlebars template
        // console.log("log this:" + blogData);
        const blogs = blogData.map((blog) => blog.get({ plain: true }));
        res.render('all-blogs', { blogs });
});
  
// route to get one blog
router.get('/blog/:id', async (req, res) => {
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

// route to get to login page
router.get('/login', async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard')
    return
  }  
  res.render('login')
  
});


module.exports = router;

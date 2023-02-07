const Blog = require("../models/blogModel");

//Get all blogs
const getAllBlogs = (req, res) => {
  Blog.find()
    .then((result) => {
      res.json({ "Result is: ": result });
    })
    .catch((err) => {
      console.log(`We have some ERROR here - ${err}`);
    });
};

//The above but with async,await
// const getAllBlog = async (req, res) => {
//   try {
//     const result = await Blog.find();
//     res.json(result);
//   } catch (err) {
//     console.log(`We have some ERROR here - ${err}`);
//   }
// };

//GET Blog
const getOneBlog = (req, res) => {
  Blog.findById(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(`We have some ERROR here - ${err}`);
    });
};


//CREATE Blog
const createBlog = (req, res) => {
  console.log(req.body);
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(`We have some ERROR here - ${err}`);
    });
};

//DELETE Blog
const deleteBlog = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json(`Blog with id: ${id} deleted`);
    })
    .catch((err) => {
      console.log(`We have some ERROR here - ${err}`);
    });
};

//We export them here and import them in routes.js
module.exports = {
  getAllBlogs,
  getOneBlog,
  createBlog,
  deleteBlog,
};

//We need express and express.Router() here.
const express = require("express");
const router = express.Router();

//We import all controllers here and use them where we need them
const {
  getAllBlogs,
  getOneBlog,
  createBlog,
  deleteBlog,
} = require("../controllers/blogControllers");

//Instead app.METHOD now We use router.METHOD
router.get("/", getAllBlogs);
router.get("/:id", getOneBlog);
router.post("/create", createBlog);
// router.put("/:id");    Must check how to update only what I want.
router.delete("/:id", deleteBlog);

//We must export our router
module.exports = router;

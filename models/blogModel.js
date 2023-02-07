//We need mongoose here
const mongoose = require("mongoose");

//Set up mongoose.Schema. --https://mongoosejs.com/docs/guide.html
const blogSchema = mongoose.Schema({
  blog: {
    title: {
      type: String,
      require: true,
    },
    author: {
      type: String,
      // require: true,
    },
    body: {
      type: String,
      // require: true,
    },
    // date: {
    //   type: Date,
    //   default: Date.now(),
    // },
  },
});

//To use our schema definition, we need to convert our blogSchema into a Model we can work with.
// To do so, we pass it into mongoose.model(modelName, schema)
module.exports = mongoose.model("Blog", blogSchema);

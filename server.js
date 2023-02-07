const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const blogRoutes = require("./routes/blogRoutes");

const app = express();
const PORT = process.env.PORT;
const URL = process.env.MONGO_DB_URL;

//You NEED express.json() and express.urlencoded() for POST and PUT requests,
// because in both these requests you are sending data (in the form of some data object)
// to the server and you are asking the server to accept or store that data (object),
// which is enclosed in the body (i.e. req.body) of that (POST or PUT) Request
app.use(express.json()); //body-parser in old versions
app.use(express.urlencoded({ extended: false }));

mongoose.set("strictQuery", false);
mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(PORT, () => {
      console.log(
        `MongoDB connected: ${result.connection.host} and server is live on port :${PORT}`
      );
    });
  })
  .catch((err) => {
    console.log(`Some ERROR - ${err}`);
  });

app.use("/api", blogRoutes);

const express = require("express");
const mongoose = require("mongoose");


const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
// ///////////////////////////////////////////////////////////////////////////

// //////////////////////////////////////////////////////////////////////////?


app.get('/', (req, res) => {
  res.render("index.ejs");
})

app.listen(3000, () => {
  console.log("The server is running on port 3000.");
})

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.json());
// ///////////////////////////////////////////////////////////////////////////
mongoose.connect("mongodb://localhost:27017/coloursNameDB", { useNewUrlParser: true});

const colourNameSchema = new mongoose.Schema({
  name: String,
  rgb: String,
  hsl: String,
  hex: String
});

const ColourName = new mongoose.model("Colour", colourNameSchema);
// //////////////////////////////////////////////////////////////////////////?

app.get('/', (req, res) => {
  try {
    ColourName.find((err, colours) => {
      res.render("index.ejs", {coloursArray: colours});
    })
  } catch (error) {
    console.log(error);
  }
})

// app.listen(3000, () => {
//   console.log("The server is running on port 3000.");
// })
app.listen(5000, () => {
  console.log("The server is running on port 5000.");
})

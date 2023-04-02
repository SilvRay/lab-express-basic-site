const express = require("express");

// créer un serveur nommé app
const app = express();

app.use(express.static("public"));

// app.set('view engine', 'hbs') moteur de template hbs

app.get("/", (req, res, nex) => {
  res.sendFile(__dirname + "/views/home.html");
  //   res.render('home')
});

app.get("/about", (req, res, nex) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/work", (req, res, nex) => {
  res.sendFile(__dirname + "/views/work.html");
});

app.get("/gallery", (req, res, nex) => {
  res.sendFile(__dirname + "/views/gallery.html");
});

app.listen(3000, () => {
  console.log("My first app listening on port 3000");
});

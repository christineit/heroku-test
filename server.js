var express = require("express");
var path = require("path");
var app = express();

var PORT = process.env.PORT || 8080; //On Heroku run on 8080 OR if 8080 is not available then run on cloud next available port
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, function() {
  console.log("App listening on PORT:" + PORT);
});

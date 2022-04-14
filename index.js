const express = require("express");
const app = express();
const router = express.Router();
const path = require("path")
var port = "4999";

app.use(express.static("Main"));

router.get("/", function(req,res){
  res.sendFile(path.join(__dirname + "/Main/Directory/Homepage.html"));
});

app.use("/",router);

app.use(function(req,res,next) {
    res.status(404);
    res.sendFile(__dirname + "/Main/Directory/404.html");
});

app.listen(port);
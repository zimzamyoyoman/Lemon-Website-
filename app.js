var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("LANDING PAGE!");
});

app.listen(4200, function() {
    console.log("Server is running on PORT 4200!");
});
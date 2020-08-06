var express = require("express");

var app = express();
app.use(express.static(__dirname + "/assets"));
var data = require("./assets/data/data.json");

app.get("/", function(req, res){
    res.redirect("/projects");
})

app.get("/test", function(req, res){
    res.render("mobiletest.ejs", {data:data})
});

app.get("/projects", function(req,res){
    res.render("index.ejs", {data:data})
});

app.get("/projects/:id", function(req,res){
    var id = req.params.id;
    res.render("show.ejs", {data:data, id: id})
});

app.get("*", function(req, res){
    res.render("index.ejs", {data:data})
});


app.listen(3000, process.env.IP, function(){
    console.log("TrevorServerStarted");
});
var express=require("express");
var app=express();
var bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));
app.set("view engine","ejs");

var friends=["x","y"];

app.get("/",function(req,res){
    res.render("home");
});

app.post("/addfriend",function(req,res){
    var nf=req.body.newfriend;
    friends.push(nf);
    res.redirect("/friends");
});

app.get("/friends",function(req,res){
    
    res.render("friends",{friends:friends});
});







app.listen(3000,function(){
    console.log("serving");
});
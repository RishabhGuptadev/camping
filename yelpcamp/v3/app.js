var express=require("express");
var app=express();
var bodyparser=require("body-parser");
var mongoose =require("mongoose");
var campground =require("./models/campground");
var seedDb = require("./seed");
var comment =require("./models/comment");
var passport =require("passport");
var localStrategy = require("passport-local");
var User = require("./models/user");
var methodOverRide = require("method-override");
// =======middleware
app.use(express.static(__dirname+ "/public"));
app.set("view engine","ejs");
// seedDb();
var commentRoutes=require("./routes/comments"),
    campgroundRoutes=require("./routes/campground"),
    authRoutes = require("./routes/auth");
app.use(bodyparser.urlencoded({extended:true}));
mongoose.connect("mongodb://localhost/yelp_camp");
app.use(methodOverRide("_method"));
app.use(require("express-session")({
    secret : "i am back",
    resave:false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(commentRoutes);
app.use(campgroundRoutes);
app.use(authRoutes);

app.get("/",function(req,res){
    res.render("landing");
});



   

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server has been started");
});
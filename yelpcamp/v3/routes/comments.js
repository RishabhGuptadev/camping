var express = require("express");
var router = express.Router();
var campground =require("../models/campground");
var comment    =require("../models/comment");
router.get("/campgrounds/:id/comments/new",isLoggedIn,function(req,res){
    campground.findById(req.params.id,function(err,campground)
    {
        if(err){
            console.log(err);
        }
        else{
             res.render("comments/new",{campground:campground});
        }
    });
   
});

router.post("/campgrounds/:id/comments",isLoggedIn,function(req,res){
  campground.findById(req.params.id,function(err,campground){
     if(err){
         console.log(err);
         
     } 
     else {
         comment.create(req.body.comment,function(err,comment){
            if(err){
                console.log(err);
            } 
            else{
                comment.author.id =req.user._id;
                comment.author.username =req.user.username;
                comment.save();
                campground.comments.push(comment);
                campground.save();
                res.redirect('/campgrounds/'+ campground._id);
            }
         });
     }
  });
    
});

router.get("/campgrounds/:id/comments/comment_id/edit ",function(req,res){
    res.render("comments/edit");
});

    function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
        
    }
    else{
        res.redirect("/login");
    }
}

module.exports =router;
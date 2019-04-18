var express = require("express");
var router = express.Router();
var campground =require("../models/campground");
var mongoose =require("mongoose");
router.get("/campgrounds",function(req,res){
    campground.find({},function(err,allcampgrounds){
        if(err){
            console.log(err);
        }
        else {
             res.render("campgrounds",{campgrounds:allcampgrounds});
        }
    });
  
});
router.post("/campgrounds",isLoggedIn,function(req,res){
 var name =req.body.name;
 var image =req.body.image;
 var author ={
     id:req.user._id,
     username:req.user.username
 }
 var newcampground={name:name, image:image,author:author};
 campground.create(newcampground,function(err,newlycreated){
     if(err)
{
    console.log(err);
} 
     else {
         res.redirect("/campgrounds");
     }
 });

});
router.get("/campgrounds/new",isLoggedIn,function(req,res){
    res.render("newcampgrounds");
});

router.get("/campgrounds/:id",function(req,res){
    campground.findById(req.params.id).populate("comments").exec(function(err,foundcampground){
        if(err){
            console.log(err);
        }
        else{
             res.render("show",{campground:foundcampground});
        }
       
    });
}); 


router.get("/campgrounds/:id/edit",checkOwner,function(req, res) {
   campground.findById(req.params.id,function(err, foundcampground) {
       res.render("edit",{campground:foundcampground});
   })
  
});

router.put("/campgrounds/:id",checkOwner,function(req,res){
        campground.findByIdAndUpdate(req.params.id,req.body.campground, function(err, foundcampground) {
            if(err){
                console.log(err);
            }
            else{
                
                res.redirect("/campgrounds/"+req.params.id);
            }
        });
});

router.delete("/campgrounds/:id",checkOwner,function(req,res){
    campground.findByIdAndRemove(req.params.id,function(err){
        if(err){
            console.log(err);
        }
        res.redirect("/campgrounds");
    });
});

function  checkOwner(req,res,next){
     if(req.isAuthenticated()){
          campground.findById(req.params.id,function(err,foundcampground){
        if(err){
            console.log(err);
            res.redirect("back");
        }
        else{ 
            console.log(req.user._id);
          console.log(foundcampground.author.id);
          if(req.user._id.equals(foundcampground.author.id)){
          next();
          }
          else{
              res.redirect("back");
          }
         
        } 
        
    });
 
    }
    else{
        res.redirect("back");
    }
}
 function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
        
    }
    else{
        res.redirect("/login");
    }
}


module.exports =router;
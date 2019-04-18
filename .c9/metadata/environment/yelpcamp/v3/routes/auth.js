{"filter":false,"title":"auth.js","tooltip":"/yelpcamp/v3/routes/auth.js","undoManager":{"mark":42,"position":42,"stack":[[{"start":{"row":0,"column":0},"end":{"row":41,"column":1},"action":"insert","lines":[" app.get(\"/register\",function(req,res){","        res.render(\"register\")});","        ","    app.post(\"/register\",function(req, res) {","        var newUser= new User({username:req.body.username});","      User.register(newUser,req.body.password,function(err,user){","          if(err){","              console.log(err);","              return res.render(\"register\");","          }","          passport.authenticate(\"local\")(req,res,function(){","              res.redirect(\"/campgrounds\");","          });","      });","    });","","","app.get(\"/login\",function(req, res) {","   res.render(\"login\") ;","});","app.post(\"/login\",passport.authenticate(\"local\",{","   successRedirect :\"/campgrounds\",","   failureRedirect :\"/login\"","    ","}),","    function(req, res) {","","});","app.get(\"/logout\",function(req, res) {","   req.logout();","   res.redirect(\"/\");","});","","function isLoggedIn(req,res,next){","    if(req.isAuthenticated()){","        return next();","        ","    }","    else{","        res.redirect(\"/login\");","    }","}"],"id":1}],[{"start":{"row":0,"column":1},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":1,"column":0},"end":{"row":1,"column":1},"action":"insert","lines":[" "]}],[{"start":{"row":0,"column":1},"end":{"row":1,"column":30},"action":"insert","lines":["var express = require(\"express\");","var router = express.Router();"],"id":3}],[{"start":{"row":2,"column":1},"end":{"row":2,"column":4},"action":"remove","lines":["app"],"id":4}],[{"start":{"row":2,"column":1},"end":{"row":2,"column":2},"action":"insert","lines":["r"],"id":5},{"start":{"row":2,"column":2},"end":{"row":2,"column":3},"action":"insert","lines":["o"]},{"start":{"row":2,"column":3},"end":{"row":2,"column":4},"action":"insert","lines":["u"]},{"start":{"row":2,"column":4},"end":{"row":2,"column":5},"action":"insert","lines":["t"]},{"start":{"row":2,"column":5},"end":{"row":2,"column":6},"action":"insert","lines":["e"]},{"start":{"row":2,"column":6},"end":{"row":2,"column":7},"action":"insert","lines":["r"]}],[{"start":{"row":5,"column":6},"end":{"row":5,"column":7},"action":"remove","lines":["p"],"id":6},{"start":{"row":5,"column":5},"end":{"row":5,"column":6},"action":"remove","lines":["p"]},{"start":{"row":5,"column":4},"end":{"row":5,"column":5},"action":"remove","lines":["a"]}],[{"start":{"row":5,"column":4},"end":{"row":5,"column":10},"action":"insert","lines":["router"],"id":7}],[{"start":{"row":19,"column":2},"end":{"row":19,"column":3},"action":"remove","lines":["p"],"id":8},{"start":{"row":19,"column":1},"end":{"row":19,"column":2},"action":"remove","lines":["p"]},{"start":{"row":19,"column":0},"end":{"row":19,"column":1},"action":"remove","lines":["a"]}],[{"start":{"row":19,"column":0},"end":{"row":19,"column":6},"action":"insert","lines":["router"],"id":9}],[{"start":{"row":22,"column":2},"end":{"row":22,"column":3},"action":"remove","lines":["p"],"id":10},{"start":{"row":22,"column":1},"end":{"row":22,"column":2},"action":"remove","lines":["p"]},{"start":{"row":22,"column":0},"end":{"row":22,"column":1},"action":"remove","lines":["a"]}],[{"start":{"row":22,"column":0},"end":{"row":22,"column":6},"action":"insert","lines":["router"],"id":11}],[{"start":{"row":30,"column":2},"end":{"row":30,"column":3},"action":"remove","lines":["p"],"id":12},{"start":{"row":30,"column":1},"end":{"row":30,"column":2},"action":"remove","lines":["p"]},{"start":{"row":30,"column":0},"end":{"row":30,"column":1},"action":"remove","lines":["a"]}],[{"start":{"row":30,"column":0},"end":{"row":30,"column":6},"action":"insert","lines":["router"],"id":13}],[{"start":{"row":1,"column":30},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":14}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":1},"action":"insert","lines":["v"],"id":15},{"start":{"row":2,"column":1},"end":{"row":2,"column":2},"action":"insert","lines":["a"]},{"start":{"row":2,"column":2},"end":{"row":2,"column":3},"action":"insert","lines":["r"]}],[{"start":{"row":2,"column":3},"end":{"row":2,"column":4},"action":"insert","lines":[" "],"id":16},{"start":{"row":2,"column":4},"end":{"row":2,"column":5},"action":"insert","lines":["p"]},{"start":{"row":2,"column":5},"end":{"row":2,"column":6},"action":"insert","lines":["a"]},{"start":{"row":2,"column":6},"end":{"row":2,"column":7},"action":"insert","lines":["s"]},{"start":{"row":2,"column":7},"end":{"row":2,"column":8},"action":"insert","lines":["p"]},{"start":{"row":2,"column":8},"end":{"row":2,"column":9},"action":"insert","lines":["s"]}],[{"start":{"row":2,"column":8},"end":{"row":2,"column":9},"action":"remove","lines":["s"],"id":17},{"start":{"row":2,"column":7},"end":{"row":2,"column":8},"action":"remove","lines":["p"]}],[{"start":{"row":2,"column":7},"end":{"row":2,"column":8},"action":"insert","lines":["s"],"id":18},{"start":{"row":2,"column":8},"end":{"row":2,"column":9},"action":"insert","lines":["p"]}],[{"start":{"row":2,"column":4},"end":{"row":2,"column":9},"action":"remove","lines":["passp"],"id":19},{"start":{"row":2,"column":4},"end":{"row":2,"column":12},"action":"insert","lines":["passport"]}],[{"start":{"row":2,"column":12},"end":{"row":2,"column":13},"action":"insert","lines":[" "],"id":20},{"start":{"row":2,"column":13},"end":{"row":2,"column":14},"action":"insert","lines":["="]},{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":["r"]},{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"insert","lines":["e"]},{"start":{"row":2,"column":16},"end":{"row":2,"column":17},"action":"insert","lines":["q"]},{"start":{"row":2,"column":17},"end":{"row":2,"column":18},"action":"insert","lines":["u"]},{"start":{"row":2,"column":18},"end":{"row":2,"column":19},"action":"insert","lines":["i"]},{"start":{"row":2,"column":19},"end":{"row":2,"column":20},"action":"insert","lines":["r"]}],[{"start":{"row":2,"column":20},"end":{"row":2,"column":21},"action":"insert","lines":["e"],"id":21}],[{"start":{"row":2,"column":14},"end":{"row":2,"column":21},"action":"remove","lines":["require"],"id":22},{"start":{"row":2,"column":14},"end":{"row":2,"column":25},"action":"insert","lines":["require(\"\")"]}],[{"start":{"row":2,"column":23},"end":{"row":2,"column":24},"action":"insert","lines":["a"],"id":23}],[{"start":{"row":2,"column":23},"end":{"row":2,"column":24},"action":"remove","lines":["a"],"id":24}],[{"start":{"row":2,"column":23},"end":{"row":2,"column":24},"action":"insert","lines":["p"],"id":25},{"start":{"row":2,"column":24},"end":{"row":2,"column":25},"action":"insert","lines":["a"]},{"start":{"row":2,"column":25},"end":{"row":2,"column":26},"action":"insert","lines":["s"]},{"start":{"row":2,"column":26},"end":{"row":2,"column":27},"action":"insert","lines":["s"]},{"start":{"row":2,"column":27},"end":{"row":2,"column":28},"action":"insert","lines":["p"]},{"start":{"row":2,"column":28},"end":{"row":2,"column":29},"action":"insert","lines":["o"]},{"start":{"row":2,"column":29},"end":{"row":2,"column":30},"action":"insert","lines":["r"]},{"start":{"row":2,"column":30},"end":{"row":2,"column":31},"action":"insert","lines":["t"]}],[{"start":{"row":2,"column":33},"end":{"row":2,"column":34},"action":"insert","lines":[";"],"id":26}],[{"start":{"row":2,"column":34},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":27},{"start":{"row":3,"column":0},"end":{"row":3,"column":1},"action":"insert","lines":["v"]},{"start":{"row":3,"column":1},"end":{"row":3,"column":2},"action":"insert","lines":["a"]},{"start":{"row":3,"column":2},"end":{"row":3,"column":3},"action":"insert","lines":["r"]}],[{"start":{"row":3,"column":3},"end":{"row":3,"column":4},"action":"insert","lines":[" "],"id":28},{"start":{"row":3,"column":4},"end":{"row":3,"column":5},"action":"insert","lines":["u"]},{"start":{"row":3,"column":5},"end":{"row":3,"column":6},"action":"insert","lines":["s"]},{"start":{"row":3,"column":6},"end":{"row":3,"column":7},"action":"insert","lines":["e"]},{"start":{"row":3,"column":7},"end":{"row":3,"column":8},"action":"insert","lines":["r"]}],[{"start":{"row":3,"column":7},"end":{"row":3,"column":8},"action":"remove","lines":["r"],"id":29},{"start":{"row":3,"column":6},"end":{"row":3,"column":7},"action":"remove","lines":["e"]},{"start":{"row":3,"column":5},"end":{"row":3,"column":6},"action":"remove","lines":["s"]},{"start":{"row":3,"column":4},"end":{"row":3,"column":5},"action":"remove","lines":["u"]}],[{"start":{"row":3,"column":4},"end":{"row":3,"column":5},"action":"insert","lines":["U"],"id":30},{"start":{"row":3,"column":5},"end":{"row":3,"column":6},"action":"insert","lines":["s"]},{"start":{"row":3,"column":6},"end":{"row":3,"column":7},"action":"insert","lines":["e"]},{"start":{"row":3,"column":7},"end":{"row":3,"column":8},"action":"insert","lines":["r"]}],[{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"insert","lines":[" "],"id":31},{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"insert","lines":["="]}],[{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"insert","lines":[" "],"id":32},{"start":{"row":3,"column":11},"end":{"row":3,"column":12},"action":"insert","lines":["r"]},{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"insert","lines":["e"]},{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"insert","lines":["q"]},{"start":{"row":3,"column":14},"end":{"row":3,"column":15},"action":"insert","lines":["u"]},{"start":{"row":3,"column":15},"end":{"row":3,"column":16},"action":"insert","lines":["i"]}],[{"start":{"row":3,"column":11},"end":{"row":3,"column":16},"action":"remove","lines":["requi"],"id":33},{"start":{"row":3,"column":11},"end":{"row":3,"column":22},"action":"insert","lines":["require(\"\")"]}],[{"start":{"row":45,"column":1},"end":{"row":46,"column":0},"action":"insert","lines":["",""],"id":34},{"start":{"row":46,"column":0},"end":{"row":46,"column":1},"action":"insert","lines":["m"]},{"start":{"row":46,"column":1},"end":{"row":46,"column":2},"action":"insert","lines":["o"]},{"start":{"row":46,"column":2},"end":{"row":46,"column":3},"action":"insert","lines":["d"]},{"start":{"row":46,"column":3},"end":{"row":46,"column":4},"action":"insert","lines":["u"]},{"start":{"row":46,"column":4},"end":{"row":46,"column":5},"action":"insert","lines":["l"]},{"start":{"row":46,"column":5},"end":{"row":46,"column":6},"action":"insert","lines":["e"]},{"start":{"row":46,"column":6},"end":{"row":46,"column":7},"action":"insert","lines":["."]},{"start":{"row":46,"column":7},"end":{"row":46,"column":8},"action":"insert","lines":["e"]}],[{"start":{"row":46,"column":8},"end":{"row":46,"column":9},"action":"insert","lines":["x"],"id":35},{"start":{"row":46,"column":9},"end":{"row":46,"column":10},"action":"insert","lines":["p"]}],[{"start":{"row":46,"column":7},"end":{"row":46,"column":10},"action":"remove","lines":["exp"],"id":36},{"start":{"row":46,"column":7},"end":{"row":46,"column":14},"action":"insert","lines":["exports"]}],[{"start":{"row":46,"column":14},"end":{"row":46,"column":15},"action":"insert","lines":[" "],"id":37},{"start":{"row":46,"column":15},"end":{"row":46,"column":16},"action":"insert","lines":["="]},{"start":{"row":46,"column":16},"end":{"row":46,"column":17},"action":"insert","lines":["r"]},{"start":{"row":46,"column":17},"end":{"row":46,"column":18},"action":"insert","lines":["o"]}],[{"start":{"row":46,"column":18},"end":{"row":46,"column":19},"action":"insert","lines":["u"],"id":38},{"start":{"row":46,"column":19},"end":{"row":46,"column":20},"action":"insert","lines":["t"]},{"start":{"row":46,"column":20},"end":{"row":46,"column":21},"action":"insert","lines":["e"]},{"start":{"row":46,"column":21},"end":{"row":46,"column":22},"action":"insert","lines":["r"]}],[{"start":{"row":46,"column":22},"end":{"row":46,"column":23},"action":"insert","lines":[";"],"id":39}],[{"start":{"row":3,"column":20},"end":{"row":3,"column":21},"action":"insert","lines":["."],"id":40},{"start":{"row":3,"column":21},"end":{"row":3,"column":22},"action":"insert","lines":["."]},{"start":{"row":3,"column":22},"end":{"row":3,"column":23},"action":"insert","lines":["/"]},{"start":{"row":3,"column":23},"end":{"row":3,"column":24},"action":"insert","lines":["m"]},{"start":{"row":3,"column":24},"end":{"row":3,"column":25},"action":"insert","lines":["o"]},{"start":{"row":3,"column":25},"end":{"row":3,"column":26},"action":"insert","lines":["d"]},{"start":{"row":3,"column":26},"end":{"row":3,"column":27},"action":"insert","lines":["e"]},{"start":{"row":3,"column":27},"end":{"row":3,"column":28},"action":"insert","lines":["l"]},{"start":{"row":3,"column":28},"end":{"row":3,"column":29},"action":"insert","lines":["s"]}],[{"start":{"row":3,"column":29},"end":{"row":3,"column":30},"action":"insert","lines":["/"],"id":41}],[{"start":{"row":3,"column":30},"end":{"row":3,"column":31},"action":"insert","lines":["u"],"id":42},{"start":{"row":3,"column":31},"end":{"row":3,"column":32},"action":"insert","lines":["s"]},{"start":{"row":3,"column":32},"end":{"row":3,"column":33},"action":"insert","lines":["e"]},{"start":{"row":3,"column":33},"end":{"row":3,"column":34},"action":"insert","lines":["r"]}],[{"start":{"row":3,"column":36},"end":{"row":3,"column":37},"action":"insert","lines":[";"],"id":43}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":16,"column":13},"end":{"row":16,"column":13},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1554533343839,"hash":"17fd27e04e1262ac40180d36ad939c3466e11409"}
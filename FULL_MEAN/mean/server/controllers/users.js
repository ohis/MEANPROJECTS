var mongoose = require('mongoose')
var User = mongoose.model('User');

module.exports = {
  index: function(req,res){
    User.find({},function(err,users){
      if(err){
        return res.json(err);
      }
      console.log('got to index server');
      console.log(users);
      return res.json(users);
    })
  },
  create: function(req,res){
    var user = new User(req.body);
    console.log(user.name);
    User.create(req.body,function(err,user){
      console.log(req.body);
      if(err){
        console.log(err);
        return res.json(err);
      }
      console.log("got to create in server");
      console.log(user);
      return res.json(user);
    })
  },

  show: function(req,res){
    User.findById(req.params.id,function(err,user){
      if(err){
        return res.json(err);
      }
      if(!user){
        return res.json({
          "errors": "404 - User not found!"
        })
      }
      return res.json(user);
    })
  },
  update: function(req,res){
    User.findById(req.params.id,function(err,user){
      if(err){
        return res.json(err);
      }
      if(!user){
        return res.json({
          "errors": "404 - User not found!"
        })
      }
      user.name = req.body.name;
      user.email = req.body.email;
      user.save(function(err,user){
        if(err){
          return res.json(err);
        }
        return res.json(user);
      })
    })
  },

  destroy: function(req,res){
    User.findByIdAndRemove(req.params.id, function(err,user){
      if(err){
        return res.json(err)
      }
      return res.json(user);
    })
  }
}

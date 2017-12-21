console.log('friends controller');
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');
module.exports = {
  index: function(req,res){
   Friend.find({}, function(err,friends){
     if(err){
       console.log(err);
      // return res.send(err);
    }//return res.json(friends);
    else{res.json(friends);}
   })
    //res.json({placeholder:"index"});
  },
  create: function(req,res){
    var friend = new Friend(req.body);
    console.log(req.body);
    friend.save(function(err,friend){
      if(err){
        //return res.send(err);
        console.log(err);
      }else{return res.redirect('/');}
    })
  //  res.json({placeholder:'create'});
  },
  update: function(req,res){
    Friend.findById(req.params.id,function(err,friend){
      if(err){
        console.log(err);
      }else{
        console.log("Updating friends");
        friend.first_name = req.body.first_name;
        friend.last_name = req.body.last_name;
        friend.birthday = req.body.birthday;
        friend.save(function(err){
          if(err){
            console.log(err);
          }else{
              res.json({placeholder:'update'});
          }
        })

      }
    })

  },
  delete: function(req,res){
    Friend.remove({_id: req.pqrams.id}, function(err){
      if(err){
        console.log(err);
      }else{res.json({placeholder:'delete'});}
    })

  },
  show: function(req,res){
  Friend.findOne({_id:re.params.id}, function(err,result){
    if(err){
      console.log(err);
    }else{res.json({placeholder:'show'});}
  })

  }
}

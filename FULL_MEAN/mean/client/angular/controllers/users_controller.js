app.controller('UsersController',function(UserFactory){
  console.log('initializing UsersController...');
  var self = this;
  self.users = [];
  self.index = function(){
    UserFactory.index(function(res){
      console.log(res.data);
      self.users = res.data;
    })
  }
  self.create = function(newUser){
    console.log(newUser.name);
    console.log(newUser);
    UserFactory.create(newUser,function(res){
       self.newUser = {};
      console.log("created stuff");
      console.log(res);
      self.index();

    })
  }
})

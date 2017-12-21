app.factory('UserFactory', function($http){
  var factory = {};

  factory.index = function(callback){
    console.log("in index factory");
    $http.get('/users').then(callback);
  }
  factory.create = function(newUser,callback){
    console.log("in create factory");
    console.log(newUser.email);
    $http.post('/users', newUser).then(callback);
  }
  return factory;
})

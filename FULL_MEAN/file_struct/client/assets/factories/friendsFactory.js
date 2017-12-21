console.log('Friends Factory');
app.factory('friendsFactory', ['$http', function($http) {
  var friends = [];
  var friend = {};
//  var factory = {};
function FriendsFactory(){
  var _this = this;
      this.create = function(friend, callback) {
          $http.post('/friends', friend).then(function(returned_data){
            console.log(returned_data.data);
            friend = returned_data.data;
            if (typeof(callback) == 'function'){
              callback(returned_data.data);
            }
          });
      };

      this.update = function(id,editedFriend, callback) {
        $http.put('/friends' + id,editedFriend).then(function(returned_data) {
            console.log(returned_data.data);
            friend = friend_data.data;
            if (typeof(callback) == 'function'){
              callback(returned_data.data);
            }
        });
      };

      this.index = function() {
          //call this method if you want to update or set the friends variable
          $http.get('/friends').then(function(returned_data){
            console.log(returned_data.data);
            friends = returned_data.data;
            callback(friends);
          });
      };

      this.show = function(id,callback) {
         $http.get('/friends'+id).then(function(returned_data){
           friend = returned_data.data;
           callback(friend);
         });
      };

      this.delete = function(id,callback){
        $http.delete('/friends'+id).then(function(){
          callback();
        });
      };

      this.getFriends = function(callback){
        callback(friends);
      };

      this.getFriend = function(id,callback){
        console.log(friend);
        $http.get('/friends/'+id).then(function(returned_data){
          friend = returned_data.data;
          callback(friend);
        });
      };
}

  return new FriendsFactory();
}]);

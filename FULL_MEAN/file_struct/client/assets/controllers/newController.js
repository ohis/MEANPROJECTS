var app = angular.module('app');
app.controller('newController', ['$scope','friendsFactory','$location', function($scope, friendsFactory,$location) {
  //$scope.friends = [];
  console.log('in newController');
  $scope.create = function() {
    console.log('creating a friend');
      friendsFactory.create($scope.friend, function(data) {
          // If we needed to display an updated list of friends on this page, we would have to do this;
          console.log(data);
          $location.url('/');
          //$scope.friends = data;
      });
  }
  var index = function () {
      friendsFactory.index(function(data) {
          console.log(data);
          $scope.friends = data;
      })
  }
  index();

  $scope.home = function(){
    $location.url('/');
  }

}]);

var app = angular.module('app');
app.controller('editController', ['$scope','friendsFactory', '$routeParams', function($scope, friendsFactory, $routeParams) {
    function($scope,$routeParams,$location,friendsFactory){
      var getFriend = function(){
        friendsFactory.getFriend($routeParams.id, function(factoryData){
          var date = new Date(factory.Data.birthday);
          factoryData.birthday = date;
          console.log($scope.friend);
        });

      };

      $scope.updateFriend = function() {
            console.log($scope.friend)
            friendsFactory.update($routeParams._id,$scope.friend, function(returnedData) {
              var date = new Date(returnedData.birthday);
              returnedData.birthday = date;
              $scope.friend = returnedData;
              $location.url('/');
            });
          };

          $scope.home = function(){
            $location.url('/');
          }

          getFriend();
    }


  /*
    OUR $scope.update function goes here <-- $scope because we need to access this method
    with ng-submit or ng-click (from the form in the previous assignment).  Want to see
    all of the friends when we get back including the updated on??
    See Index in the previous controller.

  */




}]);

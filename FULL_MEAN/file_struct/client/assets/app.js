var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/main.html',
      controller: 'mainController',
      controllerAs: 'MC'
    })
    .when('/new', {
      templateUrl: 'partials/new.html',
      controller: 'newController',
      //controllerAs: 'NC'
    })
    .when('/edit/:_id', {
      templateUrl: 'partials/edit.html',
      controller: 'editController',
      controllerAs: 'EC'
    })
    .when('/show/:_id', {
      templateUrl: 'partials/show.html',
      controller: 'editController',
      controllerAs: 'EC'
    })
    .otherwise({
      redirectTo: '/'
    });
});

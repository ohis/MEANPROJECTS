var app = angular.module('myApp', ['ngRoute']);
/* configuration for angular route */
app.config(function($routeProvider) {
  $routeProvider
    .when('/index', {
      templateUrl: '/partials/index.html',
      controller: 'indexController'
    })
    .when('/edit/:id', {
      templateUrl: '/partials/edit.html',
      controller: 'editController as eC',

    })
    .when('/new', {
      templateUrl: '/partials/new.html',
      controller: 'newController ',
    })
    .otherwise({
      redirectTo: '/index'
    });
});

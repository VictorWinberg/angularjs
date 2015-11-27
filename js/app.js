angular.module('website', ['ngRoute']).
  config(function($routeProvider) {
    $routeProvider.
      when('/about', {templateUrl:'partials/about.html'}).
      when('/experiments', {templateUrl:'partials/experiments.html'}).
      otherwise({redirectTo:'/home', templateUrl:'partials/home.html'})
  }).
  controller('MainController', function ($scope) {
      $scope.title = 'Welcome to angularjs';
      $scope.body = 'This is a project by Victor Winberg';
  });

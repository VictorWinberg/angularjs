angular.module('website', ['ngRoute']).
  config(function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/about', {
        templateUrl:'partials/basic-template.html',
        controller:'AboutController'
      }).
      when('/experiments', {
        templateUrl:'partials/basic-template.html',
        controller:'ExperimentsController'
      }).
      when('/personakt', {
        templateUrl:'partials/personakt.html',
        controller:'PersonCtrl'
      }).
      otherwise({
        redirectTo:'/home',
        templateUrl:'partials/basic-template.html',
        controller:'HomeController'
      });
      // use the HTML5 History API
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
  }).
  controller('HomeController', function ($scope) {
    $scope.title = 'Welcome to angularjs';
    $scope.body = 'This is the projects homepage';
  }).
  controller('AboutController', function($scope) {
    $scope.title = 'About page';
    $scope.body = 'This is the about page';
  }).
  controller('ExperimentsController', function($scope) {
    $scope.title = 'Experiments';
    $scope.body = 'Warning this is experimental';
  }).
  controller('PersonCtrl', function($scope) {
    
  });

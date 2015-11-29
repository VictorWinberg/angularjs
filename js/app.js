angular.module('website', ['ngRoute']).
  config(function($routeProvider) {
    $routeProvider.
      when('/nyheter', {
        templateUrl:'partials/basic-template.html',
        controller:'NewsController'
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
        redirectTo:'/',
        templateUrl:'partials/basic-template.html',
        controller:'HomeController'
      });
  }).
  controller('HeaderController', function($scope) {
    $scope.logopath = 'img/dseklogo.svg';
    $scope.dropdowns =
    [
      {title: 'Aktuellt', items: [
        {title: 'Nyheter', href: '/nyheter'},
        {title: 'Kalender', href: '/kalender'},
        {title: 'Eventanmälan', href: '/eventanmälan'}]},
      {title: 'Community', items: [
        {title: 'Anslut', href: '/anslut'}]},
      {title: 'För funktionärer', items: [
        {title: 'STAB16', href: '/stab16'}]},
      {title: 'Sektionen', items: [
        {title: 'Om sektionen', href: '/sektionen'},
        '-',
        {title: 'Swagtest', href: '/swagtest'}]},
      {title: 'För företag', href: '/foretag'}
    ];
  }).
  controller('HomeController', function ($scope) {
    $scope.title = 'Welcome to angularjs';
    $scope.body = 'This is the projects homepage';
  }).
  controller('TopicalController', function($scope) {
    $scope.title = 'Aktuellt';
    $scope.body = 'Dsek.se renoveras om';
  }).
  controller('ExperimentsController', function($scope) {
    $scope.title = 'Experiments';
    $scope.body = 'Warning this is experimental';
  }).
  controller('PersonCtrl', function($scope) {

  });

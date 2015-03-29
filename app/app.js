'use strict';

// Declare app level module which depends on views, and components
angular.module('sad', [
  'ngRoute',
  'sad.main',
  'sad.settings',
  'sad.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);

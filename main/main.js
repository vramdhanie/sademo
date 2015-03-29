'use strict';

angular.module('sad.main', ['ngRoute', 'ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'main/index.html',
    controller: 'MainController'
  });
}])

.controller('MainController', ['$scope', function(sc) {
    sc.landUses = [
        {name:"School", id:0},
        {name:"Farm", id:1},
        {name:"Residential", id:2}
    ];
    sc.plots = [
        [23,12,54,76], 
        [2,3,4,5],
        [8,2,3,4],
        [44,55,6,32],
        [99,33,2,3],
        [22,33,44,55],
        [11,22,33,44],
        [44,55,66,77],
        [34,54,32,76]
    ];
    
    sc.landUse = [[1,2,3,4], [4,5,6,7], [7,8,9, 0]];
    
    sc.assignments = [0,1,1,0, 2,1,2,2,0];
    
    sc.cost = function(){
        
    }
    
}]);
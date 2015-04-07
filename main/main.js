'use strict';

angular.module('sad.main', ['ngRoute', 'ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'main/index.html',
    controller: 'MainController'
  });
}])

.controller('MainController', ['$scope', function(sc) {
    sc.criteria = 4;
    sc.landUses = [
        {name:"School", id:0},
        {name:"Farm", id:1},
        {name:"Residential", id:2}
    ];
    sc.plots = [
        [0.9,0.1,1.8,1.2], 
        [0.2,1.3,0.4,1.5],
        [0.8,1.2,1.3,0.4],
        [0.44,1.55,0.6,1.32],
        [1.99,0.33,1.2,0.3],
        [1.22,1.33,0.44,0.55],
        [0.11,0.22,1.33,1.44],
        [1.44,1.55,1.66,1.77],
        [0.34,0.54,0.32,0.76]
    ];
    
    sc.landUse = [[1.1,0.2,1.3,0.4], [1.4,1.5,0.6,0.7], [0.7,0.8,1.9, 1.0]];
    
    sc.assignments = [0,1,1,0, 2,1,2,2,0];
    
    sc.cost = function(){
        var sum = 0;
        for(var i = 0; i < sc.plots.length; i++){
            var a = sc.assignments[i]
            for(var j = 0; j < sc.criteria; j++){
                sum += sc.plots[i][j] * sc.landUse[a][j];
            }
        }
        return sum;
    }
    
}]);
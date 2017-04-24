'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanApp
 */
var app = angular.module('yeomanApp');

app.controller('MainCtrl', ['$scope', function ($scope) {
    	$scope.awesomeThings = [ //modelo
      		'HTML5 Boilerplate',
      		'AngularJS',
      		'Karma',
      		'E2E',
      		'Protractor',
    	];
  	}]);

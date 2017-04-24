'use strict';

var app = angular.module('tareasApp');

app.controller('MainCtrl', ['$scope',function($scope) {
    $scope.tareas = [
      'Item1',
      'Item2',
      'Item3',
      'Item4'
    ];

    $scope.addTarea = function (){
    	$scope.tareas.push($scope.tarea);
    	$scope.tarea = '';
    };

    $scope.eliminarTarea = function (indice){
    	//si se utilizan estas líneas hay que pasarle el elemento
    	//var pos = $scope.tareas.indexOf(element); 
    	//$scope.tareas.splice(pos,1);
    	$scope.tareas.splice(indice,1);
    };
}]);

'use strict';

var app = angular.module('tareasApp');

app.controller('MainCtrl', ['$scope', 'localStorageService', function($scope, localStorageService) {
    
    var tareasEnAlmacen = localStorageService.get('tareas');

    $scope.tareas = tareasEnAlmacen && tareasEnAlmacen.split('\n') || [];

    //listener de angular
    //para vigilar los cambios que se producen en tareas (añaden o borran)
    $scope.$watch('tareas', function (){
        localStorageService.add('tareas', $scope.tareas.join('\n'));
    });

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

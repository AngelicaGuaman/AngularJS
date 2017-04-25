'use strict';

var app = angular.module('tareasApp');

app.controller('MainCtrl', function($scope, localStorageService) {
    
    if (localStorageService.get('ls-tareas')){
        $scope.tareas = localStorageService.get('ls-tareas');
    }else{
        $scope.tareas = [];
    }

    //listener de angular
    //para vigilar los cambios que se producen en tareas (añaden o borran)
    $scope.$watchCollection('tareas', function (){
        localStorageService.set('ls-tareas', $scope.tareas);
    });

    $scope.addTarea = function (){
    	$scope.tareas.push($scope.tarea);
    	$scope.tarea = '';
    };

    $scope.eliminarTarea = function (element){
    	//si se utilizan estas líneas hay que pasarle el elemento
    	var pos = $scope.tareas.indexOf(element); 
    	$scope.tareas.splice(pos,1);
    };
});

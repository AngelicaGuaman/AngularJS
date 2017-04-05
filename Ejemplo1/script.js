var app=angular.module("app",[]);
  
app.controller('PruebaController',['$scope', 
	function($scope){
		$scope.mensaje = "Hola Mundo";

		$scope.changeMessage = function(newMessage){
			$scope.mensaje = newMessage;
		};
	}]); 

var app=angular.module("app",[]);
  
app.controller('FormController',['$scope', '$timeout', function($scope, $timeout){
		
		$scope.producidoEvento="No";

		$timeout(function(){
			$scope.producidoEvento="SIII";
		}, 3000);
	
	}]); 

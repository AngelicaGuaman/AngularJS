var app=angular.module("app",[]);
  
app.controller('FormController',['$scope', '$log', '$http', function($scope, $log, $http){
		$scope.f1 = {
			nombre:"",
			escuderia:""
		}

		$http({
			method: 'GET',
			url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
		}).then(function success(response){
			$scope.f1=response.data;
		}, function error(response){
			alert("Ha fallado la petición. Estado HTTP: "+response.statusText);
		});
	
	}]); 

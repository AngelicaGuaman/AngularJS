var app=angular.module("app",[]);
  
app.controller('FormController',['$scope', '$log', '$http', function($scope, $log, $http){
		$scope.seguro = {
			nif:"",
			name:"",
			surname:"",
			age:undefined,
			sexo:"",
			casado:false,
			numHijos:undefined,
			embarazada:false,
			coberturas:{
				oftalmologia:false,
				dental:false,
				fecundacionInVitro:false
			},
			illnesses:{
				heart:false,
				estomacal:false,
				rinones:false,
				alergia:false,
				nameAlergia:""
			},
			fechaCreacion:new Date()
		}

		$log.debug("Acabamos de crear el $scope");

		$http({
			method: 'GET',
			url: 'datos.json'
		}).then(function success(response){
			$scope.seguro=response.data;
		}, function error(response){
			alert("Ha fallado la petición. Estado HTTP: "+response.statusText);
		});
	
	}]); 

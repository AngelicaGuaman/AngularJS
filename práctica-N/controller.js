var app=angular.module("app",[]); 

app.controller('FormController',['$scope', '$http', function($scope, $http){
	$scope.list = [];
	$scope.StandingsLists = [];		
	$scope.elements = []; //lista de elementos nuevos

	$scope.format = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
	$scope.nuevo = { //pareja clave, valor para el json
		name:"",
		escuderia: ""
	};

	$scope.showMe=false;
	$scope.showTable=false;

	$scope.email;
	var url = "http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK";

	$scope.comenzarBtn = function(){
		$scope.showMe = !$scope.showMe;
	};

	$scope.enviarBtn = function(){
		$http.jsonp(url)
			.success(function(data){
				$scope.showTable = !$scope.showTable;
				$scope.list = data;
				var driver = false, constructor = false; //variables para añadir a nuestro array/JSON para mostrar en el HTML

				$scope.StandingsLists = $scope.list.MRData.StandingsTable.StandingsLists;

				angular.forEach($scope.StandingsLists, function(StandingsValue, Standingskey){
					angular.forEach(StandingsValue, function(DriverStandingsValue, DriverStandingsKey){
						if (DriverStandingsKey == "DriverStandings"){
							angular.forEach(DriverStandingsValue, function(DriverValue, DriverKey){
								angular.forEach(DriverValue, function(ConstructorsListValue, ConstructorsListKey){					
									if (ConstructorsListKey == "Driver" && !driver){
										$scope.nuevo.name = ConstructorsListValue.givenName + " " + ConstructorsListValue.familyName;
										driver = true;
									};

									if (ConstructorsListKey == "Constructors" && !constructor){
										angular.forEach(ConstructorsListValue, function(ConstructorsValue, ConstructorsKey){
											$scope.nuevo.escuderia = ConstructorsValue.name;
										});
										constructor = true;
									};

									if(driver && constructor){
										$scope.elements.push($scope.nuevo);
										$scope.nuevo = {};
										driver = false;
										constructor = false;
									};
								});
							});
						};
					});
         		});

			}).error(function(error){
				console.log(error)
			});
	};

	$scope.eliminarBtn = function(element){
		var pos = $scope.elements.indexOf(element);
		$scope.elements.splice(pos, 1);
	};

}]); 

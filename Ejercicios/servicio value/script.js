var app=angular.module("app",[]);
 
app.value("miServicioValue", "Hola Mundo");

app.value("matematicasSimples", {
	suma:function(a, b){
		return a + b;
	}, resta:function(a, b){
		return a - b;
	}
});

app.value("radio", 10);

app.value("area", function(radio){
	return 3.1416 * radio * radio;
});

app.controller('FormController', ['$scope', 'miServicioValue', 'matematicasSimples', 'radio', 'area', 
	function($scope, miServicioValue, matematicasSimples, radio, area){
		$scope.valor = miServicioValue;
		$scope.suma = matematicasSimples.suma(10,8);
		$scope.resta = matematicasSimples.resta(10,8);
		$scope.area = area(radio);

	}]); 

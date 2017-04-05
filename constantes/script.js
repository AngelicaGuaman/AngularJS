var app=angular.module("app",[]);
 
app.constant("miServicioConstante", "Hola Mundo");

app.constant("matematicasSimples", {
	suma:function(a, b){
		return a + b;
	}, resta:function(a, b){
		return a - b;
	}
});

app.constant("radio", 10);

app.constant("area", function(radio){
	return 3.1416 * radio * radio;
});

app.controller('FormController', ['$scope', 'miServicioConstante', 'matematicasSimples', 'radio', 'area', 
	function($scope, miServicioConstante, matematicasSimples, radio, area){
		$scope.valor = miServicioConstante;
		$scope.suma = matematicasSimples.suma(10,8);
		$scope.resta = matematicasSimples.resta(10,8);
		$scope.area = area(radio);

	}]); 

var app=angular.module("app",[]);
 
function Rectangulo(){
	this.ancho = 0;
	this.alto = 0;

	this.setAncho = function(ancho){
		this.ancho = ancho;
	}

	this.setAlto = function(alto){
		this.alto = alto;
	}

	this.getArea = function(){
		return this.ancho * this.alto;
	}
}

//Es mejor utilizar service en lugar de value cuando se instancia una clase
app.value("rectangulo", new Rectangulo());

app.controller('FormController', ['$scope', 'rectangulo', 
	function($scope, rectangulo){
		rectangulo.setAncho(3);
		rectangulo.setAlto(6);

		$scope.area = rectangulo.getArea();

	}]); 

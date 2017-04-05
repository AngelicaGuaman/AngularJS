var app=angular.module("app",[]);

app.value("tamanhoInicialRectangulo",{
	ancho:2,
	alto:4
}); 

//se añade al constructor un parámetro inicial
function Rectangulo(tamanhoInicial){
	this.ancho = tamanhoInicial.ancho;
	this.alto = tamanhoInicial.alto;

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

app.service("rectangulo", ['tamanhoInicialRectangulo',Rectangulo]);

app.controller('FormController', ['$scope', 'rectangulo', 
	function($scope, rectangulo){
		//por defecto tiene los valores iniciales
		$scope.area = rectangulo.getArea();

	}]); 

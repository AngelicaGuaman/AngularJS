var app=angular.module("app",[]);
  
app.controller('AlumnosController',['$scope', function($scope){
	$scope.alumnos = [ //modelo
		{nombre: "Robinson Ganchala", telefono:"123456789", curso: "Cuarto"	},
		{nombre: "Juan Carlos García", telefono:"987654321", curso: "Cuarto" },
		{nombre: "Javier Bodas", telefono:"543216789", curso:"Primero" },
		{nombre: "Angélica Guamán Albarracín", telefono: "678954321", curso:"Segundo"}
	];

}]); 

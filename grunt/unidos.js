var app=angular.module("app",[]);
  
app.controller('AlumnosController',['$scope', '$log', function($scope, $log){

	$scope.formVisibility=false;

	$scope.alumnos = [ //modelo
		{nombre: "Robinson Ganchala", telefono:"123456789", curso: "Cuarto"	},
		{nombre: "Juan Carlos García", telefono:"987654321", curso: "Cuarto" },
		{nombre: "Javier Bodas", telefono:"543216789", curso:"Primero" },
		{nombre: "Angélica Guamán Albarracín", telefono: "678954321", curso:"Segundo"}
	];

	$scope.nuevoAlumno = {
		nombre:"",
		telefono:"",
		curso:""
	};

	$scope.save = function()
	{
		$scope.alumnos.push($scope.nuevoAlumno);
		$scope.nuevoAlumno={};
		$scope.formVisibility=false;
	};

	$scope.showForm = function(){
		$scope.formVisibility=true;
		console.log($scope.formVisibility);
	};
}]); 

function miScript1(){

}
function miScript2(){

}
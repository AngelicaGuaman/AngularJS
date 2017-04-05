var app=angular.module("app",[]);
  
app.controller('FormController',['$scope', 
	function($scope){
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
				rinhones:false,
				alergia:false,
				nameAlergia:""
			},
			fechaCreacion:new Date()
		}

	
	}]); 

'use strict';

/**
 * @ngdoc function
 * @name prototipoYeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prototipoYeomanApp
 */
angular.module('prototipoYeomanApp')

.controller('MainCtrl', function ($scope) {
	var baseURL = 'http://lorempixel.com/960/450/'; //tamaño de imágenes 960x450
	$scope.setInterval = 5000; //5seg
	$scope.noWrapSlides = false;
	$scope.active = 0;
	var currentIndex = 0;

	$scope.slides = [
		{
			title:'Aprende a mantenerte en forma',
			img:baseURL+'sports/',
			text:'¡Practica algún deporte todos los días!',
			id:currentIndex++
		},
		{
			title:'Buena alimentación',
			img:baseURL+'food/',
			text:'¡La importancia de frutas y verduras en la dieta!',
			id:currentIndex++
		},
		{
			title:'En contacto con la naturaleza',
			img:baseURL+'nature/',
			text:'¡Mantente en armonía con la naturaleza!',
			id:currentIndex++
		}
	];

	baseURL = 'http://lorempixel.com/200/200/'; //tamaño de imágenes 960x450

	$scope.contenido = [
		{
			img:baseURL+'people',
			title:'Sobre nosotros',
			summary:'Somos una empresa comprometida con la vida sana'
		},
		{
			img:baseURL+'business',
			title:'Nuestros servicios',
			summary:'Ofrecemos asesoría profesional para mantenerse Sanos. buena alimentación'
		},
		{
			img:baseURL+'transport',
			title:'Contáctanos',
			summary:'#333, Buena vida Online, Plaza Central, Duranque, Zip-432167'
		}
	];
});

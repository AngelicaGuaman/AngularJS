module.exports = function(grunt) {

	// Project configuration.
  	grunt.initConfig({
  		jshint:{
  			all:['controller.js']
  		},

  		concat:{ //tarea 1: mezclar los archivos
  			dist:{
  				src:['controller.js', "controller1.js", "controller2.js"], //tiene que de misma secuencia en la que deben ser concatenados
  				dest: 'unidos.js'
  			}
  		},

  		uglify:{ //Tarea2: minimizar el archivo
  			dist:{
  				src:'unidos.js',
  				dest:'build/unidos.min.js'
  			}
  		}
  	});

  	// Load the plugin that provides the "uglify" task.
 	grunt.loadNpmTasks('grunt-contrib-jshint');
 	grunt.loadNpmTasks('grunt-contrib-concat');
 	grunt.loadNpmTasks('grunt-contrib-uglify');

  	// Default task(s).
  	grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
};
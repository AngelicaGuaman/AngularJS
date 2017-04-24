module.exports = function(grunt) {

	// Project configuration.
  	grunt.initConfig({
  		jshint:{
  			all:['controller.js']
  		}
  	});

  	// Load the plugin that provides the "uglify" task.
 	grunt.loadNpmTasks('grunt-contrib-jshint');

  	// Default task(s).
  	grunt.registerTask('default', ['jshint']);
};
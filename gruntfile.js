var gruntConfigPath = "./configs/grunt/";
var helpers = require('./configs/helpers');

module.exports = function(grunt) {

	require("load-grunt-tasks")(grunt);

	grunt.initConfig({
		"pkg": grunt.file.readJSON("package.json"),
		"clean": ['dist'],
        'webpack-dev-server': {
           main: {
           		port: 3000,
                keepAlive: true,
                contentBase: helpers.root('dist'),
                path: helpers.root('public'),
    			publicPath: '/public/',
            }
        },

        watch: {
		  scripts: {
		    files: ['src/**/*.*'],
		    tasks: ['dev'],
		    options: {
		    	interrupt: true,
		    	debounceDelay: 250,
		      	livereload: true,
		    },
		  },
		},
	});

	grunt.config("webpack", require(gruntConfigPath + "grunt-webpack.config.js"));


	// Register all the tasks
	grunt.registerTask('dev', ['clean', 'webpack:dev']);
	grunt.registerTask('prod', ['clean', 'webpack:prod']);

	grunt.registerTask('start', ['webpack-dev-server']);

	grunt.registerTask('default', ['prod', 'start']);
};
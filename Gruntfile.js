'use strict';

module.exports = function (grunt) {

	require('load-grunt-config')(grunt);
	require('time-grunt')(grunt);

	grunt.registerTask('default', function () {
		grunt.log.writeln('projectType: ' + grunt.config('package.settings.projectType'));
		switch (grunt.config('package.settings.projectType')) {
			case  'frontend':
				grunt.task.run([
					//'concurrent:server',
					//'autoprefixer',
					'ect:render',
					'connect:dev',
					'watch'
				]);
				break;
			case 'cakephp':
				grunt.task.run([
					//'concurrent:server',
					//'autoprefixer',
					'open:dev',
					'watch'
				]);
				break;
		}
	});

	grunt.registerTask('build', [
		// 'clean:dist',
		// 'useminPrepare',
		// 'concurrent:dist',
		// 'autoprefixer',
		// 'concat',
		// 'cssmin',
		// 'uglify',
		// 'copy:dist',
		// 'modernizr',
		// 'rev',
		// 'usemin',
		// 'htmlmin'
	]);
};

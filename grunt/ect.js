'use strict';

module.exports = {
	render: {
		options: {
			ext: '.ect',
			root: '<%= package.settings.app %>/templates/views'
		},
		cwd: '<%= package.settings.app %>/templates/views',
		patterns:  ['**/*.ect'],
		dest: '<%= package.settings.app %>/webroot/',
		ext: '.html',
		variables: {
			settings: '<%= package.settings %>'
		}
	}
};
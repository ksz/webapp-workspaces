'use strict';

module.exports =  {
	// Mocha testing framework configuration options
	mocha: {
		all: {
			options: {
				run: true,
				urls: ['http://<%= php.server.options.hostname %>:<%= php.server.options.port %>/index.html']
			}
		}
	}
};
'use strict';

module.exports =  {
	// Empties folders to start fresh
    clean: {
        dist: {
            files: [{
                dot: true,
                src: [
                    '.tmp',
                    '<%= settings.dist %>/*',
                    '!<%= settings.dist %>/.git*'
                ]
            }]
        }
    }
};
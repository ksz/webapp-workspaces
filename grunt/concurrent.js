'use strict';

module.exports =  {
    // Run some tasks in parallel to speed up build process
    concurrent: {
        server: [
            'compass:server',
            'copy:styles'
        ],
        test: [
            'copy:styles'
        ],
        dist: [
            'compass',
            'copy:styles',
            'imagemin',
            'svgmin'
        ]
    }
};
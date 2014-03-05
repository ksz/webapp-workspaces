'use strict';

module.exports =  {
    // The following *-min tasks produce minified files in the dist folder
    imagemin: {
        dist: {
            files: [{
                expand: true,
                cwd: '<%= settings.app %>/images',
                src: '{,*/}*.{gif,jpeg,jpg,png}',
                dest: '<%= settings.dist %>/images'
            }]
        }
    }
};
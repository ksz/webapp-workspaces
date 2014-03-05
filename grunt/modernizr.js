'use strict';

module.exports =  {
    // Generates a custom Modernizr build that includes only the tests you
    // reference in your app
    modernizr: {
        devFile: '<%= settings.app %>/webroot/bower_components/modernizr/modernizr.js',
        outputFile: '<%= settings.dist %>/webroot/bower_components/modernizr/modernizr.js',
        files: [
            '<%= settings.dist %>/scripts/{,*/}*.js',
            '<%= settings.dist %>/styles/{,*/}*.css',
            '!<%= settings.dist %>/scripts/vendor/*'
        ],
        uglify: true
    }
};
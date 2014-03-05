'use strict';

module.exports =  {
    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
        options: {
            dest: '<%= settings.dist %>'
        },
        html: '<%= settings.app %>/index.html'
    },

    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
        options: {
            assetsDirs: ['<%= settings.dist %>']
        },
        html: ['<%= settings.dist %>/{,*/}*.html'],
        css: ['<%= settings.dist %>/styles/{,*/}*.css']
    }
};
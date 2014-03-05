'use strict';

module.exports =  {
    // js: {
    //     files: ['<%= package.settings.app %>/scripts/{,*/}*.js'],
    //     tasks: ['jshint'],
    //     options: {
    //         livereload: true
    //     }
    // },
    // jstest: {
    //     files: ['test/spec/{,*/}*.js'],
    //     tasks: ['test:watch']
    // },
    // compass: {
    //     files: ['<%= package.settings.app %>/styles/{,*/}*.{scss,sass}'],
    //     tasks: ['compass:server', 'autoprefixer']
    // },
    // styles: {
    //     files: ['<%= package.settings.app %>/styles/{,*/}*.css'],
    //     tasks: ['newer:copy:styles', 'autoprefixer']
    // },
    ect: {
        files: ['<%= package.settings.app %>/templates/{,*/}*.ect'],
        tasks: ['ect:render']
    },
    livereload: {
        options: {
            livereload: true
        },
        files: [
            '<%= package.settings.app %>/{,*/}*.html',
            '<%= package.settings.app %>/styles/{,*/}*.css',
            '<%= package.settings.app %>/images/{,*/}*.{gif,jpeg,jpg,png,svg,webp}'
        ]
    },
    gruntfile: {
        files: ['Gruntfile.js']
    }
};

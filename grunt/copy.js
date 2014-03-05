'use strict';

module.exports =  {
    // Copies remaining files to places other tasks can use
    copy: {
        dist: {
            files: [{
                expand: true,
                dot: true,
                cwd: '<%= settings.app %>',
                dest: '<%= settings.dist %>',
                src: [
                    '*.{ico,png,txt}',
                    '.htaccess',
                    'webroot/img/{,*/}*.webp',
                    '{,*/}*.html',
                    'webroot/css/fonts/{,*/}*.*',
                    'webroot/bower_components/' + (this.includeCompass ? 'sass-' : '') + 'bootstrap/' + (this.includeCompass ? 'fonts/' : 'dist/fonts/') +'*.*'
                ]
            }]
        },
        styles: {
            expand: true,
            dot: true,
            cwd: '<%= settings.app %>/styles',
            dest: '.tmp/styles/',
            src: '{,*/}*.css'
        }
    }
};
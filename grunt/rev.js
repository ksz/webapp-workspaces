'use strict';

module.exports =  {
    // Renames files for browser caching purposes
    rev: {
        dist: {
            files: {
                src: [
                    '<%= settings.dist %>/scripts/{,*/}*.js',
                    '<%= settings.dist %>/styles/{,*/}*.css',
                    '<%= settings.dist %>/images/{,*/}*.{gif,jpeg,jpg,png,webp}',
                    '<%= settings.dist %>/styles/fonts/{,*/}*.*'
                ]
            }
        }
    }
};
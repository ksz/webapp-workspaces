'use strict';

module.exports =  {
    // Compiles Sass to CSS and generates necessary files if requested
    compass: {
        options: {
            sassDir: '<%= settings.app %>/styles',
            cssDir: '<%= settings.app %>/styles',
            generatedImagesDir: '.tmp/images/generated',
            imagesDir: '<%= settings.app %>/images',
            javascriptsDir: '<%= settings.app %>/scripts',
            fontsDir: '<%= settings.app %>/styles/fonts',
            importPath: '<%= settings.app %>/webroot/bower_components',
            httpImagesPath: '/images',
            httpGeneratedImagesPath: '/images/generated',
            httpFontsPath: '/styles/fonts',
            relativeAssets: false,
            assetCacheBuster: false
        },
        dist: {
            options: {
                generatedImagesDir: '<%= settings.dist %>/images/generated'
            }
        },
        server: {
            options: {
                debugInfo: true
            }
        }
    }
};
'use strict';

module.exports =  {

    options: {
        port: 9000,
        livereload: 35729,
        hostname: '192.168.0.220'
    },
    dev: {
        options: {
            open: true,
            base: [
                '<%= package.settings.app %>/webroot'
            ]
        }
    },
    test: {
        options: {
            port: 9001,
            base: [
                'test',
                '<%= package.settings.app %>/webroot'
            ]
        }
    },
    dist: {
        options: {
            open: true,
            base: '<%= package.settings.dist %>/webroot',
            livereload: false
        }
    }
};
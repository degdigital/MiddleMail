module.exports = function(grunt) {

    var paths = {
        source: {
            css: 'source/css',
            images: 'source/images',
            js: 'source/js'
        },
        dest: {
            css: 'css',
            images: 'images',
            js: 'js'
        }
    };

    require('load-grunt-config')(grunt, {
        config: {
            paths: paths
        }
    });

};
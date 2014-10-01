module.exports = function(grunt) {

    var target = grunt.option('target');

    var paths = {
        tmpBuildDir: 'tmp.build',
        buildDir: 'build',
        tmpPreviewDir: 'tmp.preview',
        previewDir: 'preview'
    }

    if ( target && target === 'preview' ) {
        paths.tmpBuildDir = 'tmp.preview';
        paths.buildDir = 'preview';
    }

    require('load-grunt-config')(grunt, {
        config: { paths: paths }
    });

};


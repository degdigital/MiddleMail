module.exports = {
    build: {
        files: [{
          expand: true,
          cwd: '<%= paths.tmpBuildDir %>',
          src: ['**/*.html'],
          dest: '<%= paths.buildDir %>/',
        }]
    },
    preview: {
        files: [{
          expand: true,
          cwd: '<%= paths.tmpPreviewDir %>',
          src: ['**/*.html'],
          dest: '<%= paths.previewDir %>/',
        }]
    }
};
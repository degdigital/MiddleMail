module.exports = function(grunt) {

    var paths = {
        sandbox: {
            host: '',
            base: '',
            folder: ''
        }
    };

    require('load-grunt-config')(grunt, { 
        config: { 
            paths: paths,
            litmusConfig: grunt.file.readJSON('.mailconfig')
        }
    });

};



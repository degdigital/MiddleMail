module.exports = function(grunt) {

    var paths = {
        sandbox: {
            server: 'DigitalDirect/[ClientName]/[Project]',
            local: 'sandbox'
        }
    };

    require('load-grunt-config')(grunt, { 
        config: { 
            paths: paths,
            litmusConfig: grunt.file.readJSON('.litmus')    
        }
    });

};



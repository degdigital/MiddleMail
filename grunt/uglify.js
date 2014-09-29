module.exports = {
    app: {
        files: {
            '<%= paths.dest.js %>/main.js': [
                '<%= paths.source.js %>/lib/jquery.js',
                '<%= paths.source.js %>/main.js'
            ]
        }
    }
};
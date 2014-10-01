module.exports = {
    build: {
        options: {
            replacements: [
                { pattern: '<html><body>', replacement: '' },
                { pattern: '</body></html>', replacement: '' }
            ]
        },
        files: [{
            expand: true,
            cwd: '<%= paths.buildDir %>/content',
            src: ['**/*.html'],
            dest: '<%= paths.buildDir %>/content'
        }]
    },
    preview: {
        options: {
            replacements: [{
                pattern: /((.|\n)*)<!--STRIP-->/ig,
                replacement: ''
            },{
                pattern: /<!--\/STRIP-->((.|\n)*)/ig,
                replacement: ''
            },{ pattern: '<html><body>', replacement: '' },
                { pattern: '</body></html>', replacement: '' }]
        },
        files: [{
            expand: true,
            cwd: '<%= paths.previewDir %>/content',
            src: ['**/*.html'],
            dest: '<%= paths.previewDir %>/content'
        }]
    }
};
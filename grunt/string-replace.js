module.exports = {
    build: {
        options: {
            replacements: [{
                pattern: /((.|\n)*)<!--STRIP-->/ig,
                replacement: ''
            },{
                pattern: /<!--\/STRIP-->((.|\n)*)/ig,
                replacement: ''
            }]
        },
        files: [{
            expand: true,
            cwd: 'build',
            src: ['**/*.html'],
            dest: 'build'
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
            }]
        },
        files: [{
            expand: true,
            cwd: 'preview',
            src: ['**/*.html'],
            dest: 'preview'
        }]
    }
};
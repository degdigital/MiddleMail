module.exports = {
    preview: {
        options: {
            
        },
        files: [{
            expand: true,
            cwd: 'preview',
            src: ['**/*.html'],
            dest: 'preview'
        }]
    },
    build: {
        options: {
        },
        files: [{
            expand: true,
            cwd: 'build',
            src: ['*.html'],
            dest: 'build'
        },
        {
            expand: true,
            cwd: 'build/content',
            src: ['*.html'],
            dest: 'build/content'
        }]
    }
};
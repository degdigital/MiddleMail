module.exports = {
    test: {
        options: {
          key: '<%= mailgunConfig.key %>',
          sender: '<%= mailgunConfig.sender %>',
          recipient: '<%= mailgunConfig.recipient %>',
          subject: '<%= mailgunConfig.subject %>'            
        },
        src: ['preview/*.html']
    }
};
module.exports = {
    test: {
        options: {
          key: '<%= mailconfig.mailgun.key %>',
          sender: '<%= mailconfig.mailgun.sender %>',
          recipient: '<%= mailconfig.mailgun.recipient %>',
          subject: '(Test)'            
        },
        src: ['preview/*.html']
    }
};
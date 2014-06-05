module.exports = {
    test: {
        src: ['preview/confirmation.html'],
        options: {
            clients: ["gmailnew"],
            username: "<%= mailconfig.litmus.username %>",
            password: "<%= mailconfig.litmus.password %>",
            url: "<%= mailconfig.litmus.url %>"            
        }
    }
};
module.exports = {
    test: {
        src: ['preview/confirmation.html'],
        options: {
            clients: ["gmailnew"],
            username: "<%= litmusConfig.username %>",
            password: "<%= litmusConfig.password %>",
            url: "<%= litmusConfig.url %>"            
        }
    }
};
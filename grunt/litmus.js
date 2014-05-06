module.exports = {
    test: {
        src: ['preview/confirmation.html'],
        options: {
            clients: ['android22', 'android4', 'androidgmailapp', 'appmail6', 'chromegmailnew', 'chromeoutlookcom', 'chromeyahoo', 'ffgmailnew', 'ffoutlookcom', 'ffyahoo', 'gmailnew', 'ipad', 'ipadmini', 'iphone4', 'iphone5s', 'ol2000', 'ol2010', 'ol2013', 'outlookcom', 'yahoo']
            username: "<%= litmusConfig.username %>",
            password: "<%= litmusConfig.password %>",
            url: "<%= litmusConfig.url %>"            
        }
    }
};
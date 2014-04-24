module.exports = {
    sandbox: {
        options: {
            windows: {
                driveLetter: "X"
            },
            '*nix': {
                fileSystem: "smbfs",
            },
            share: {
                host: "degsalpha02.degdarwin.com",
                folder: "/_APPLICATION/SANDBOX.alpha/WebRoot/<%= paths.sandbox.server %>"
            },
            mountPoint: "./<%= paths.sandbox.local %>"
        }
    }
};
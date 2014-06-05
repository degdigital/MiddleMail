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
                host: "<%= paths.sandbox.host %>",
                folder: "<%= paths.sandbox.base %>"
            },
            mountPoint: "./<%= paths.sandbox.local %>"
        }
    }
};
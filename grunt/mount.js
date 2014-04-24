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
                host: "<%= mount.host %>",
                folder: "<%= mount.folder %>"
            },
            mountPoint: "./<%= paths.sandbox.local %>"
        }
    }
};
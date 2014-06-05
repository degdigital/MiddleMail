module.exports = {
  "preview": {
    "files": [
      {
        "expand": true, 
        "cwd": "preview",
        "src": ["**/*.*"], 
        "dest": '__sandbox/<%= paths.sandbox.folder %>'
      }
    ]
  }
};
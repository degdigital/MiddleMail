module.exports = {
  sass: {
    files: ["<%= paths.source.css %>/**/*.scss"],
    tasks: ["compass"],
    options: {
      "spawn": true
    }
  },
  scripts: {
    files: ["<%= paths.source.js %>/**/*.js"],
    tasks: [
      "uglify"
    ],
    options: {
      "spawn": true
    }
  }
  
};
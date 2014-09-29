module.exports = {
  "dev": {
    "options": {
      "sassDir": "<%= paths.source.css %>",
      "cssDir": "<%= paths.dest.css %>",
      "outputStyle": "compressed",
      "require": ["compass-normalize","sass-globbing"]
    }
  }
};
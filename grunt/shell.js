module.exports = {
  build: {
    options: {
      stdout: true
    },
    command: 'middleman build --clean'
  },
  server: {
    command: 'middleman server'
  }
};
module.exports = {
  preset: "jest-puppeteer",
  globals: {
    URL: "http://todomvc.com"
  },
  testMatch: [
    "**/test/**/*.test.js"
  ],
  verbose: true
}
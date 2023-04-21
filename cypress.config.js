const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    pageLoadTimeout:100000,
    env: {
      BaseUrl:'https://www.saucedemo.com/',
    },

    specPattern:'cypress/e2e/saucedemoe2e/*.js',

  },
});

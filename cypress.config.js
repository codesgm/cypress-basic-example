const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.automationexercise.com",
    setupNodeEvents(on, config) {
  
    },
  },
});

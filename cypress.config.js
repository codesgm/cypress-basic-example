const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "eh8ppn",
  e2e: {
    baseUrl: "https://www.automationexercise.com",
    setupNodeEvents(on, config) {
  
    },
  },
});

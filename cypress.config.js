const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  on('task', {

    excelToJsonConverter(filePath){
      const result = excelToJson({
        source: fs.readFileSync(filePath)
})
      return result;
    }

  })

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}


module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/integration/examples/*.js',
    chromeWebSecurity: false,
    defaultCommandTimeout: 4000,
    env: {
      url: "https://rahulshettyacademy.com"
    },
  },
});

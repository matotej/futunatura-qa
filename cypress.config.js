const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
        configFile: 'reporter-config.json',
    },
    env: {
        ...process.env
    },
    e2e: {
        baseUrl: 'https://www.futunatura.si',
        viewportHeight: 1080,
        viewportWidth: 1920,
        specPattern: 'cypress/e2e/**/*.{js,ts}',
        screenshotOnRunFailure: true,
        setupNodeEvents(on, config) {
        },
    },
});

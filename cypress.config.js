const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 10000,
  screenshotsFolder: './cypress/screenshots',
  env: {
    username: 'webmaster@tagboard.com',
    password: 'zty7qxh.wce7xrj0HMU',
    producerUrl: 'https://producer.tagboard.com',
    accountUrl: 'https://account.tagboard.com/',
  },
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'https://account.tagboard.com/',
    specPattern: './cypress/e2e/**/*.{js,jsx,ts,tsx}',
    supportFile: './cypress/support/e2e.js',
  },
});

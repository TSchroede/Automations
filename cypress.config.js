const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 10000,
  screenshotsFolder: './cypress/screenshots',
  env: {
    user: {
      username: 'webmaster@tagboard.com',
      password: '',
    },
  },
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'https://account.tagboard.com/',
    producerUrl: 'https://producer.tagboard.com',
    specPattern: './cypress/e2e/**/*.{js,jsx,ts,tsx}',
    supportFile: './cypress/support/e2e.js',
  },
});

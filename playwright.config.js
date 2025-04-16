  // @ts-check
  const { defineConfig, devices } = require('@playwright/test');

  /**
   * @see https://playwright.dev/docs/test-configuration
   */
  module.exports = defineConfig(
    {
    testDir: './tests',
    reporter: 'html',
    timeout: 20 * 1000,
    expect: {
      timeout: 5 * 1000
    },
    use: {
      browserName: "chromium",
      //headless: true,  
      headless: false,
      screenshot : 'off',
      //capture the log
      //trace: 'retain-on-failure',
    },
    // projects: [
    //   {
    //     name: 'chromium',
    //     use: { ...devices['Desktop Chrome'] },
    //   },
    //   {
    //     name: 'firefox',
    //     use: { ...devices['Desktop Firefox'] },
    //   },
    //   {
    //     name: 'webkit',
    //     use: { ...devices['Desktop Safari'] },
    //   },
    //   {
    //     name: 'msedge',
    //     use: { ...devices['Desktop Edge'] },
    //   },
    //   {
    //     name: 'iPhone SE',
    //     use: {
    //       ...devices['iPhone SE'],
    //       viewport: { width: 375, height: 667 },
    //     },
    //   },
    //   {
    //     name: 'iPhone 12',
    //     use: { ...devices['iPhone 12'] },
    //   },
    //   {
    //     name: 'iPhone XR',
    //     use: { ...devices['iPhone XR'] },
    //   },
    //   {
    //     name: 'Pixel 7',
    //     use: {
    //       ...devices['Pixel 7'],
    //       viewport: { width: 412, height: 915 },
    //     },
    //   },
    //   {
    //     name: 'Galaxy S8',
    //     use: { ...devices['Galaxy S8'] },
    //   },
    //   {
    //     name: 'Galaxy A51',
    //     use: { 
    //       ...devices['Galaxy S8'],
    //       viewport: { width: 412, height: 914 },
    //     },
    //   },
    //   {
    //     name: 'iPad Mini',
    //     use: { ...devices['iPad Mini'] },
    //   },
    //   {
    //     name: 'iPad Air',
    //     use: { 
    //       ...devices['iPad Pro 11'],
    //       viewport: { width: 820, height: 1180 },
    //     },
    //   },
    //   {
    //     name: 'iPad Pro',
    //     use: { 
    //       ...devices['iPad Pro 11'],
    //       viewport: { width: 1024, height: 1366 },
    //     },
    //   },
    // ]
  });
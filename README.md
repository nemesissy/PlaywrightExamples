# Playwright Examples

### App Under Test ###

https://www.amsmeteors.org

(2025/08/16)

### Pre-requisites ###

* Im using Visual Studio Code to create
* Im using NPM to manage

### Setup

* Install Playwright in your base repo directory:
* $ npm install @playwright/test
* $ npx playwright install
* GIT IGNORE
* ignore all playwright files
* dont modify

### Run all Tests

* To run all tests:
* $ npx playwright test
* To run tests only in chrome
* $ npx playwright test --project=chromium
* To run tests head mode ON
* $ npx playwright test --headed

### Run a  singe test
$ npx playwright test tests/test-file-name

### Location of the HTML report
* To view the run report
* $ npx playwright show-report

### Usages
* Page Object Modeling
* Collections
* Waiting on actionalbe elements
* Asserting
* Logging
* Reporting

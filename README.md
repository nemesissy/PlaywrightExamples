# Playwright Examples

### App Under Test ###

http://localhost:5173/ - Demo Ticketing System

### Pre-requisites ###

* Clone and start the UI
* $ git clone <Need to upload>
* $ cd ./demo-frontend
* $ npm run dev

### Setup

* $ git clone https://github.com/nemesissy/PlaywrightExamples.git
* $ npm install @playwright/test
* $ npx playwright install

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

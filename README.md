# 🎭 VMS E2E Test Automation Framework - Playwright

An e2e testing framework in JavaScript developed using [Playwright](https://playwright.dev/)

## Getting started

### Pre-requisites

```
$ node -v
v14.1.0

$ npm -v
6.14.4
``` 

### Run application

Clone the repository

```bash
git clone https://github.com/Ghada-1992/playwright-e2e-tests.git
``` 

Install exact dependencies/devDependencies from package-lock.json file

```bash
npm ci
```

Run test

```bash
npm test
```

## Folder Structure

        │── ...
        │── ...
        src
        ├
        │
        ├── pages                              # Generic functionality for tests
        │   |
        │   ├── base.page.js                   # Base page testing functionality
        │   ├── login.page.js                  # Login page testing functionality
        │   ├── ...
        │   ├── ...
        │
        ├── specs                              # Test suite
        │   ├── login.spec.js                  # Automated Test Script     
        │   ├── ....           
        │   ├── ....    
        │
        │
        │── jest.config.js                     # Jest confiuguration file
        │
        │
        ├── jest-playwright.config.js          # Jest-Playwright configuration file            
        │   
        │               
        │
        └─── reports   
              ├──report.html                   #  Test report of for the tests executed


To View HTML Report

```bash
reports :
  |
  ├── report.html - Right Click and Reveal in File Explorer (OR) Finder     
```
# Cypress-Automation (musala)
This is a QA chalange of Musala which using E2E testing with Cypress.

# Concepts Included
Cypress
Parallel test runs
Page Object pattern
Browser selection available from a configuration file
Store the base URL in the configuration file
parallel test 
Reporter mochawesome

# How to Start
In order to use this project you need to have the following installed locally:
1. Install visual studio code
2. install chrome & firefox  
3. open attached musala-automation-testing folder  in Visual studio code 
4. npm install 

# How to run
1. node_modules/.bin cypress open  or npx cypress open 
2. clcik on run 3 integration specs 
3. run chrome: npm run cy:chrome
4. run firefox: npm run cy:firefox
5. run parallel: npm run cy:parallel 
6. run the reporter:  ./node_modules/.bin/cypress run --reporter mochawesome 

NOTE:
 - Paraalel test run headless, and If using CI, these tests will run parallel.  
 - reports are written to a separate file for each class. This occurs as a result of running , meaning that you do not get a single unified test report.
 - Token exception is handled, and you can find it in Support/index.js  


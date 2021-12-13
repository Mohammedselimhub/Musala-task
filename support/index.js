///<reference types="Cypress"/>
import 'cypress-file-upload'
before(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    })
})
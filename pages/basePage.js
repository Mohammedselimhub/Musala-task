export default class basePage {
    typeInTextBox(selector, value) {
        cy.get(selector).type(value)
    }

    clickAButton(selector) {
        cy.get(selector).click()
    }
}





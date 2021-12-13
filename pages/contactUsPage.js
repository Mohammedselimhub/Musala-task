///<reference types="Cypress"/>
import basePage from "./basePage"

const baseObj = new basePage()

export default class contactUsPage {
    constructor() {
        this.contactNameInput = "input[name='your-name']";
        this.contactEmailInput = "input[name='your-email']";
        this.contactMobileInput = "input[name='mobile-number']";
        this.contactSubjectInput= "input[name='your-subject']";
        this.contactMessageInput = "textarea[name='your-message']";
        this.contactSendButton = "input[type='submit']";
     
    }
 
    enterContactName(contactName) {
        baseObj.typeInTextBox(this.contactNameInput, contactName)
    }
    enterContactEmail(contactEmailI) {
        baseObj.typeInTextBox(this.contactEmailInput, contactEmailI)
    }
    enterContactMobile(contactMobile) {
        baseObj.typeInTextBox(this.contactMobileInput, contactMobile)
    }
    enterContactsSubject(contactSubject) {
        baseObj.typeInTextBox(this.contactSubjectInput, contactSubject)
    }
    enterContactMassage(contactMessage) {
        baseObj.typeInTextBox(this.contactMessageInput, contactMessage)
    }
    getValidationMessage(){
        cy.get(this.contactEmailInput).parent("span").find("span").should("have.text", "The e-mail address entered is invalid.")
    }
    clickOnSendButton() {
        baseObj.clickAButton(this.contactSendButton)
    }
}

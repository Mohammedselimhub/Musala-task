///<reference types="Cypress"/>
import basePage from "./basePage"

const baseObj = new basePage()

export default class homePage {
    constructor() {
        this.contactUsButton = "button[class*='contact-label']";
        this.navegateMneu = "#menu-main-nav-1" 
    }


    getNavigationItem(itemText){
        cy.get(this.navegateMneu).find("li").find("a").contains(itemText).click({force: true})
    }
    clickOnContactUsButton() {
        baseObj.clickAButton(this.contactUsButton)
    }
}

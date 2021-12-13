///<reference types="Cypress"/>
import basePage from "./basePage"


export default class companyPage {
    constructor() {
        this.facebookButton = "span[class*='musala-icon-facebook']";  
        this.profielPictureAria = "a[class*='_2dgj']"
    }
    
    assertLeadrshipTitle(){
        cy.get('h2').contains('Leadership').should('be.visible')
    }
    
    clickOnFacebookButton() {
        cy.get(this.facebookButton).parent("a").invoke('removeAttr', 'target').click()
    }

    assertProfilePicture(){
        cy.get(this.profielPictureAria).should('be.visible')
    }
}

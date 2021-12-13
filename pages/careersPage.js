///<reference types="Cypress"/>
import basePage from "./basePage"

const baseObj = new basePage()

export default class careersPage {
    constructor() {
        this.navegationMneu = "#menu-main-nav-1" 
        this.openPositiontsButton = "button[class*='contact-label']"
        this.positionCities = "#get_location"
        this.applyButton = "input[value='Apply']"
        this.uploadFileInput = "input[name='uploadtextfield']"
        this.careerNameInput = "input[name='your-name']";
        this.careerEmailInput = "input[name='your-email']";
        this.careerMobileInput = "input[name='mobile-number']";
        this.careerMessageInput = "textarea[name='your-message']";
        this.careerSendButton = "input[type='submit']";
        this.CareerFormerrorMessage  = "div.message-form-content"
    }

    getNavItem(itemText){
        cy.get(this.navegationMneu).find("li").find("a").contains(itemText).click({force: true})
    }
    clickOpenPositions(){
        cy.get(this.openPositiontsButton).first().click()
    }
    selectCity(cityName){
        cy.get(this.positionCities).select(cityName)
    }
    fetchAllPositions(){
        cy.get("article[class='card-jobsHot']").then((cardList)=>{
            cardList.toArray().forEach(card => {
                cy.get(card).find("h2.card-jobsHot__title").then(($link)=>{
                    cy.log(`Card position: ${$link.text()}`)
                })
                cy.get(card).find("a.card-jobsHot__link").then(($link)=>{
                         cy.log(`Card link: ${$link.attr("href")}`)
                     })
            });
        })
    }

    selectAPositionByName(positioName){
        cy.get("article[class='card-jobsHot']").find("h2.card-jobsHot__title").contains(positioName).click()
    }

    assertOnNeededTitles(titleNeeded){
        cy.get("h2").contains(titleNeeded).should("be.visible")
    }

    assertOnApplyButton(){
        cy.get(this.applyButton).should("be.visible")
    }
    
    clickOnApplybutton(){
        cy.get(this.applyButton).click()
    }

    uploadFile(filePath){
        cy.get(this.uploadFileInput).attachFile(filePath)
        
    }
    enterCareerName(careerName) {
        baseObj.typeInTextBox(this.careerNameInput, careerName)
    }
    enterCareertEmail(careerEmailI) {
        baseObj.typeInTextBox(this.careerEmailInput, careerEmailI)
    }
    enterCareerMobile(careerMobile) {
        baseObj.typeInTextBox(this.careerMobileInput, careerMobile)
    }
    enterCareerMessage(careerMessage) {
        baseObj.typeInTextBox(this.careerMessageInput, careerMessage)
    }
    clickOnCareerSendButton() {
        baseObj.clickAButton(this.careerSendButton)
    }

    assertOnValidationMessage(){
        cy.get( this.CareerFormerrorMessage).find("div").should("have.text","One or more fields have an error. Please check and try again.")
    }

    clickOnErrorMessage(){
        cy.get(this.CareerFormerrorMessage).find("button").click()
    }
}

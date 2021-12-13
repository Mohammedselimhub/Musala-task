///<reference types="Cypress"/>
import careersPage from "../pages/careersPage"
import homePage from "../pages/homePage"
import contactUs from "../testData/contactUs.json";

 const careersObj = new careersPage()
 const homePageObject = new homePage()

describe("Musala Career TC", function () {
  
  beforeEach(() => {
    cy.visit("/");
  })

  it("Ensure that the system rejects invalid email format when applying for a vacancy:", () => {
    homePageObject.getNavigationItem("Careers");
    careersObj.clickOpenPositions()
    cy.url().should('be.equal', 'https://www.musala.com/careers/join-us/')
    careersObj.selectCity("Anywhere")
    careersObj.selectAPositionByName("Experienced Automation QA Engineer")
    careersObj.assertOnNeededTitles("Responsibilities")
    careersObj.assertOnNeededTitles("What we offer")
    careersObj.assertOnNeededTitles("General description")
    careersObj.assertOnNeededTitles("Requirements")
    careersObj.assertOnApplyButton()
    careersObj.clickOnApplybutton()
    careersObj.enterCareertEmail(contactUs.contactUsInvalidEmail1)
    careersObj.enterCareerMobile(contactUs.invalidContactUsMobile)
    careersObj.uploadFile("Upload\\Mohammed_Selim_Resume.pdf")
    careersObj.enterCareerMessage(contactUs.contactUsMassage)
    careersObj.clickOnCareerSendButton()
    careersObj.clickOnErrorMessage()
    careersObj.assertOnValidationMessage()
    
  })
  it("Ensure that can print in the console the list with available positions by city", () => {
    homePageObject.getNavigationItem("Careers");
    careersObj.clickOpenPositions()
    careersObj.selectCity("Sofia")
    cy.url().should('be.equal', 'https://www.musala.com/careers/join-us/?location=Sofia')
    careersObj.fetchAllPositions()
    careersObj.selectCity("Skopje")
    cy.url().should('be.equal', 'https://www.musala.com/careers/join-us/?location=Skopje')
    careersObj.fetchAllPositions()
  })
});

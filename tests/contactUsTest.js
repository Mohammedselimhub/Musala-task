///<reference types="Cypress"/>
import contactUs from "../testData/contactUs.json";
import homePage from "../pages/homePage"
import contactUsPage from "../pages/contactUsPage"


const homePageObject = new homePage()
const contactPageObject = new contactUsPage()

describe("Musala Contact-us TC", function () {
  const test = contactUs.contactMailArray;
  beforeEach(() => {
    cy.visit("/");
  })

  test.forEach((email) => {
    it("Ensure that the system rejects 5 times invalid e-mail format when submitting the contact form:  "  + email, () => {
      homePageObject.clickOnContactUsButton();
      contactPageObject.enterContactName(contactUs.contactUsName)
      contactPageObject.enterContactEmail(email)
      contactPageObject.enterContactMobile(contactUs.contactUsMobile)
      contactPageObject.enterContactsSubject(contactUs.contactUsSubject)
      contactPageObject.enterContactMassage(contactUs.contactUsMassage)
      contactPageObject.clickOnSendButton()
      contactPageObject.getValidationMessage()
    })
  })

});

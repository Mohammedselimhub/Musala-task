///<reference types="Cypress"/>
import contactUs from "../testData/contactUs.json";
import homePage from "../pages/homePage"
import companyPage from "../pages/companyPage"


 const homePageObject = new homePage()
 const companyPageObject = new companyPage()

describe("Musala Company TC", function () {
  
  beforeEach(() => {
    cy.visit("/");
  })

  it("Ensure that on clicking the company tab, displays the leadeship section and facebook icon redirect to facebook page with Musala profile picture", () => {
    homePageObject.getNavigationItem("Company");
    cy.url().should('be.equal', 'https://www.musala.com/company/')
    companyPageObject.assertLeadrshipTitle()
    companyPageObject.clickOnFacebookButton()
    cy.url().should('be.equal', 'https://www.facebook.com/MusalaSoft?fref=ts')
    companyPageObject.assertProfilePicture()
  })
});

///<reference types="Cypress"/>

describe('Test Css Selctor', () => {
    it('Test Assertion', () => {
    cy.visit("https://automationteststore.com/")

    // // selector Hub 
    // cy.get("img[src='//automationteststore.com/image/thumbnails/18/6f/demo_product03_jpg-100094-250x250.jpg']").click()
    // cy.get("img[alt='Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF 15']").click()
    // cy.get("img[alt='Flash Bronzer Body Gel']").click()

    // // Ranorex Selector
    // cy.get('img[src="//automationteststore.com/image/thumbnails/18/6a/demo_product15_1_jpg-100010-250x250.jpg"]').click()
    cy.get('a[title="Flash Bronzer Body Gel"]').click()

    
});
});

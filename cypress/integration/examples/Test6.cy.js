/// <reference types="cypress" />

describe ('My Sixth Test Suite', function(){
 
    it('Frames', function() {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href*="mentorship"]').eq(0).click()
        cy.wait(1000)
        cy.iframe().find('h1[class*="pricing-title"]').should('have.length',2)
        

})

})


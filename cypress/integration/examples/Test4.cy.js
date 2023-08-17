/// <reference types="cypress" />

describe ('My Forth Test Suite', function(){
    it('Alerts and Pop-ups', function() {
        
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
//Alert pop-up:
cy.get('#alertbtn').click()
cy.on('window:alert', (message) => {
    expect(message).to.equal('Hello , share this practice page and share your knowledge')
})
//Confirm pop-up:
cy.get('[value="Confirm"]').click()
cy.on('window:confirm', (message) => {
    expect(message).to.equal('Hello , Are you sure you want to confirm?')
})

})

it('Handle child tab', function() {
//Force open  new tab in the same tab      
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('#opentab').invoke('removeAttr', 'target').click()
//Changing the domain
    cy.origin("https://www.qaclickacademy.com", () => {
        cy.get("#navbarSupportedContent a[href*='about']").click()
    })
    
    })





})


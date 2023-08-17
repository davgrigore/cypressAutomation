/// <reference types="cypress" />

describe ('My Fifth Test Suite', function(){
    
it('Handle Web Tables', function() {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
        const text=$el.text()
        if(text.includes("Python")){
            cy.get('tr td:nth-child(2)').eq(index).next().then(function(price) {
                const priceText = price.text()
                expect(priceText).to.equal('25')
            })
        }

     })


 })


 it.only('Mouse hover pop-ups', function() {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('.mouse-hover-content').invoke('show')
    cy.contains('Top').click()
    cy.url().should('include', 'top')

 })

})


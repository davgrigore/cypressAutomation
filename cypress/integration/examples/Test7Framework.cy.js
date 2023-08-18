/// <reference types="cypress" />

describe ('My 7th Test Suite', function(){
 
   before(function(){
    cy.fixture("example").then(function(data){
        this.data=data
    })

   })
   
   it('First Test in Framework', function() {

    cy.visit('https://rahulshettyacademy.com/angularpractice/')
    cy.get(':nth-child(1) > .form-control').type(this.data.name)
    cy.get('select').select(this.data.gender)
    cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name)
    //Attribute value validation:
    cy.get(':nth-child(1) > .form-control').should('have.attr', 'minlength', '2')
    cy.get('#inlineRadio3').should('be.disabled')

    cy.get(':nth-child(2) > .nav-link').click()
    cy.selectProduct('Blackberry')
    


        

})

})


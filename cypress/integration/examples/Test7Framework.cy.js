/// <reference types="cypress" />

import HomePage from '../pageObjects/HomePage'
import ProductPage from '../pageObjects/ProductPage'

describe ('My 7th Test Suite', function(){
 
   before(function(){
    cy.fixture("example").then(function(data){
        this.data=data
    })

   })
   
   it('First Test in Framework', function() {
        //Cypress.config('defaultCommandTimeout', 8000)
        const homePage=new HomePage()
        const productPage=new ProductPage()

    cy.visit('https://rahulshettyacademy.com/angularpractice/')
    homePage.getNameBox().type(this.data.name)
    homePage.getGender().select(this.data.gender)
    homePage.getTwoWayDataBinding().should('have.value', this.data.name)
//Attribute value validation:
    homePage.getNameBox().should('have.attr', 'minlength', '2')
    homePage.getEntrepreneur().should('be.disabled')

    //cy.pause()
    //cy.debug()

//Command with multiple inputs from fixtures
    homePage.getShopTab().click()
    this.data.productName.forEach(function(element) {
        cy.selectProduct(element)
    })

    
    productPage.getCheckout().click()
    cy.contains('Checkout').click()
    cy.get('#country').type('Romania')
    cy.wait(6000)
    cy.get('.suggestions > ul > li > a').click()
    cy.get('#checkbox2').click({force:true})
    cy.get('.ng-untouched > .btn').click()
    //cy.get('.alert').should('have.text', ' Success! Thank you! Your order will be delivered in next few weeks :-). ')
    cy.get('.alert').then(function(element){
        const actualText=element.text()
        expect(actualText.includes('Success! Thank you! Your order will be delivered in next few weeks :-).')).to.be.true
    })

    
    


        

})

})


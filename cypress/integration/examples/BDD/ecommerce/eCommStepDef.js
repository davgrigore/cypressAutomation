import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import HomePage from '../../../pageObjects/HomePage'
import ProductPage from '../../../pageObjects/ProductPage'

const homePage=new HomePage()
const productPage=new ProductPage()

Given('I open Ecommerce page', () => {
    cy.visit(Cypress.env('url')+'/angularpractice/')
})

When('I add items to Cart', function() {
    homePage.getShopTab().click()
    //cy.get(':nth-child(1) > .card > .card-footer > .btn').click()
    //cy.get(':nth-child(3) > .card > .card-footer > .btn').click()
    homePage.getShopTab().click()
    this.data.productName.forEach(function(element) {
        cy.selectProduct(element)
    })
})

Then('Validate the total prices', () => {
    productPage.getCheckout().click()
    let sum=0
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
        const amount=$el.text()
        let res = amount.split(" ")
        res = res[1].trim()
        sum=Number(sum)+Number(res)
    }).then(function(){
        cy.log(sum)
    })

    cy.get('h3 strong').then(function(element){
        const amount=element.text()
        let total = amount.split(" ")
        total = total[1].trim()
        expect(sum).to.equal(Number(total))
    })
    cy.contains('Checkout').click()
})

Then('Select the country, submit and verifiy Thank you message', () => {
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
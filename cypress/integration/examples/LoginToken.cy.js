/// <reference types="cypress" />

describe ('Login Token', function(){

    it('JWT Session', function () {

        cy.loginAPI().then(function(){
            
            cy.visit('https://rahulshettyacademy.com/client',{
                onBeforeLoad: function(window){
                    window.localStorage.setItem('token',Cypress.env('token'))
                }
            })

        })

        cy.get('.card-body button:last-of-type').eq(1).click()
        cy.get(':nth-child(4) > .btn').click()
        cy.get('.subtotal > ul > :nth-child(3) > .btn').click()
        cy.get('[placeholder*="Country"]').type('rom')
        cy.get('.ta-item').each(($el, index, $list) => {
            if($el.text()===" Romania"){
                cy.wrap($el).click()
            }
        })
        //cy.get('.ta-item > .ng-star-inserted').click()
        cy.get('.btnn').click()
        cy.get('.order-summary button').contains('CSV').click()

    })


})



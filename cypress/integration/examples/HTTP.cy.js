/// <reference types="cypress" />

describe ('HTTP', function(){

    it('Mock response', function () {

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        

        //cy.intercept({requestobject}, {responseobject})
        cy.intercept(
        //Request:
        {
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },
        //Response:
        {
            statusCode: 200,
            body: [{
                "book_name": "RestAssured with Java",
                "isbn": "RSU",
                "aisle": "2301"
            }]
        }).as('bookRetrievals')

        cy.get('button[class="btn btn-primary"').click()
        cy.wait('@bookRetrievals').should(({request, response})=> {
            
            //cy.get('tr').should('have.length', response.body.length)
            
        })
        cy.get('p').should('have.text','Oops only 1 Book available')
        

    })

    it.only('Intercepting HTTP request', function(){

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', (req) => {
        req.url= "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"

        req.continue((res) => {
            //expect(res.statusCode).to.equal(403)
        })
        }).as("dummyUrl")

        cy.get('button[class="btn btn-primary"').click()
        cy.wait("@dummyUrl")

    })

})
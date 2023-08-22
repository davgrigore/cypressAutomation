Feature: End to End Ecommerce validation

    Scenario: Ecommerce products delivery
    Given I open Ecommerce page
    When I add items to Cart
    And Validate the total prices
    Then Select the country, submit and verifiy Thank you message
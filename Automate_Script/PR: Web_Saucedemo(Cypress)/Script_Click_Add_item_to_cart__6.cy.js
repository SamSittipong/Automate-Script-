// Add To Cart Item 1 - 6 
describe('Add To Cart Item 1-6', () => {
  it('Add To Cart Item 1-6', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('#add-to-cart-sauce-labs-backpack').click() // Test Case 1 : Add item 1
    cy.get('#add-to-cart-sauce-labs-bike-light').click() // Test Case 2 : Add item 2
    cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click() // Test Case 3 : Add item 3
    cy.get('#add-to-cart-sauce-labs-fleece-jacket').click() // Test Case 4 : Add item 4
    cy.get('#add-to-cart-sauce-labs-onesie').click() // Test Case 5 : Add item 5
    cy.get('#add-to-cart-test.allthethings()-t-shirt-(red)').click() // Test Case 6 : Add item 6 **Cannot Run
  })
})


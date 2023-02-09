// Add To Cart Item 1 - 6 
describe('Remove-item 1-6', () => {
  it('Remove-item 1-6', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('#add-to-cart-sauce-labs-backpack').click() 
    cy.get('#remove-sauce-labs-backpack').click() // Test Case 1 : Remove ITEM - 1
    cy.get('#add-to-cart-sauce-labs-bike-light').click()
    cy.get('#remove-sauce-labs-bike-light').click() // Test Case 2 : Remove ITEM - 2
    cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()
    cy.get('#remove-sauce-labs-bolt-t-shirt').click() // Test Case 3 : Remove ITEM - 3
    cy.get('#add-to-cart-sauce-labs-fleece-jacket').click() 
    cy.get('#remove-sauce-labs-fleece-jacket').click() // Test Case 4 : Remove ITEM - 4
    cy.get('#add-to-cart-sauce-labs-onesie').click() 
    cy.get('#remove-sauce-labs-onesie').click() // Test Case 5 : Remove ITEM - 5
  
    cy.get('#add-to-cart-test.allthethings()-t-shirt-(red)').click() // Test Case 6 : Remove ITEM - 6 ** Cannot Run
    cy.get('#remove-test.allthethings()-t-shirt-(red)').click() // Test Case 6 Remove ITEM - 6 ** Cannot Run
  })
})


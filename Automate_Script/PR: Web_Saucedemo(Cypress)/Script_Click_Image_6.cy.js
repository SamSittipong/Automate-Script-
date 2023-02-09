// Click Image 1-6 
describe('Click Image 1-6 ', () => {
  it('Click Image 1-6 ', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('[alt="Sauce Labs Backpack"]').click() // Test Case 1 : Click Image 1
    cy.get('#back-to-products').click()
    cy.get('[alt="Sauce Labs Bike Light"]').click() // Test Case 2 : Click Image 2
    cy.get('#back-to-products').click()
    cy.get('[alt="Sauce Labs Bolt T-Shirt"]').click() // Test Case 3 : Click Image 3
    cy.get('#back-to-products').click()
    cy.get('[alt="Sauce Labs Fleece Jacket"]').click() // Test Case 4 : Click Image 4
    cy.get('#back-to-products').click()
    cy.get('[alt="Sauce Labs Onesie"]').click() // Test Case 5 : Click Image 5
    cy.get('#back-to-products').click()
    cy.get('[alt="Test.allTheThings() T-Shirt (Red)"]').click() // Test Case 6 : Click Image 6
    cy.get('#back-to-products').click()
  })
})



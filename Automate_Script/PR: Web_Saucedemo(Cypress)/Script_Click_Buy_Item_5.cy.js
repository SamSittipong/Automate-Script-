// Test Case 1 : Buy item 1 times (Success)
describe(' Test Case 1', () => {
  it('Buy item 1 times (Success)', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('#shopping_cart_container').click()
    cy.get('#checkout').click()
    cy.get('#first-name').type('Hello EIEI')
    cy.get('#last-name').type('OHNO')
    cy.get('#postal-code').type('10495')
    cy.get('#continue').click()
    cy.get('#finish').click()
    cy.get('#back-to-products').click()
  })
})

// Test Case 2 : NOINPUT INFOMATION
describe(' Test Case 2', () => {
  it('NOINPUT INFOMATION', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('#shopping_cart_container').click()
    cy.get('#checkout').click()
    cy.get('#continue').click()
  })
})

// Test Case 3 : INPUT FRIST-NAME Only
describe(' Test Case 3', () => {
  it('INPUT FRIST-NAME Only', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('#shopping_cart_container').click()
    cy.get('#checkout').click()
    cy.get('#first-name').type('Hello EIEI')
    cy.get('#continue').click()
  })
})

// Test Case 4 : INPUT LAST-NAME Only
describe(' Test Case 4', () => {
  it('INPUT LAST-NAME Only', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('#shopping_cart_container').click()
    cy.get('#checkout').click()
    cy.get('#last-name').type('OHNO')
    cy.get('#continue').click()
  })
})

// Test Case 5 : INPUT ZIPCODE Only
describe(' Test Case 5', () => {
  it('INPUT ZIPCODE Only', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('#shopping_cart_container').click()
    cy.get('#checkout').click()
    cy.get('#postal-code').type('10495')
    cy.get('#continue').click()
  })
})

//Test Case 1 : 

describe('Test Case 1', () => {
  it('INPUT ID / PASSWORD', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
  })
})

//Test Case 2 : 

describe('Test Case 2', () => {
  it('INPUT ID / PASSWORD', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('locked_out_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
  })
})

//Test Case 3 : 

describe('Test Case 3', () => {
  it('INPUT ID / PASSWORD', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('problem_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
  })
})

//Test Case 4 : 

describe('Test Case 4', () => {
  it('INPUT ID / PASSWORD', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('performance_glitch_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
  })
})

//Test Case 5 : 

describe('Test Case 5', () => {
  it('INPUT ID ONLY', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#login-button').click()
  })
})

//Test Case 6 : 

describe('Test Case 6', () => {
  it('INPUT ID ONLY', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('locked_out_user')
    cy.get('#login-button').click()
  })
})

//Test Case 7 : 

describe('Test Case 7', () => {
  it('INPUT ID ONLY', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('problem_user')
    cy.get('#login-button').click()
  })
})

//Test Case 8 : 

describe('Test Case 8', () => {
  it('INPUT ID ONLY', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('performance_glitch_user')
    cy.get('#login-button').click()
  })
})

//Test Case 9 : 

describe('Test Case 9', () => {
  it('INPUT PASSWORD ONLY', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
  })
})
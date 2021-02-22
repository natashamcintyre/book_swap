describe('signed up user can log in', () => {
  it('starts new session', () => {
    cy.createUser()
    cy.visit('http://localhost:3000/sign-in')
    cy.get('form[id="user_login"]').should('exist')
    cy.get('input[id="username"]').type('testUsername').should('have.value', 'testUsername')
    cy.get('input[id="password"]').type('password')
    cy.get('form[id="user_login"]').submit()
    cy.location().should((location) => {
      expect(location.href).to.eq('https://localhost:3000/')
    })
    cy.get('form[id=book_search]').should('exist')
  })
})

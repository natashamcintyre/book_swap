describe('user search for a book with ISBN', () => {
  it('auto-populates add_book_form', () => {
    cy.visit('http://localhost:3000')
    cy.get('form[id="book_search"]').should('exist')
    cy.get('input[id="ISBNSearch"]').type('9780739360385').should('have.value', '9780739360385')
    cy.get('form[id="book_search"]').submit()
    cy.get('input[id="title"]').should('have.value', 'Harry Potter and the Deathly Hallows')
    cy.get('input[id="author"]').should('have.value', 'J. K. Rowling')
    cy.get('input[id="ISBN"]').should('have.value', '9780739360385')
    cy.get('input[id="phone_number"]').type('08546374586').should('have.value', '08546374586')
    cy.get('input[id="postcode"]').type('ABC123').should('have.value', 'ABC123')
    cy.get('form[id="book_form"]').submit()
    cy.get('div[id="books_list"').should(($books) => {
      expect($books.last()).to.contain('Harry Potter and the Deathly Hallows')
    })
  })
})

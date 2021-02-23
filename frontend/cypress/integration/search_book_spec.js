describe('user search for a book with ISBN', () => {
  it('auto-populates add_book_form', () => {
    cy.visit('http://localhost:3000')
    cy.get('.btn#isbnSearchButton').click()
    cy.get('form[id="book_search"]').should('exist')
    cy.get('input[id="ISBNSearch"]').type('9780739360385').should('have.value', '9780739360385')
    cy.get('form[id="book_search"]').submit()
    cy.get('div[id="book-confirmation"]').should('contain', 'Harry Potter and the Deathly Hallows')
    cy.get('div[id="book-confirmation"]').should('contain', 'J. K. Rowling')
    cy.get('button[id="submit"]').click()
    cy.get('div[id="books_list"]').should('contain', 'Harry Potter and the Deathly Hallows')
    cy.get('div[id="books_list"]').should('contain', 'J. K. Rowling')
  })
})

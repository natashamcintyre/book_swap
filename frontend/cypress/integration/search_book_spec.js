describe('user search for available books with free search', () => {
  it('renders list of relevant books', () => {
    cy.visit('http://localhost:3000')
    cy.get('.btn#isbnSearchButton').click()
    cy.get('form[id="book_search"]').should('exist')
    cy.get('input[id="ISBNSearch"]').type('9781119293323').should('have.value', '9781119293323')
    cy.get('form[id="book_search"]').submit()
    cy.wait(1000)
    cy.get('div[id="book-confirmation"]').should('contain', 'Coding for dummies')
    cy.get('button[id="submit"]').click()
    cy.get('form[id="book_search_too"]').should('exist')
    cy.get('input[id="book_search_too_input"]').type('Coding').should('have.value', 'Coding')
    cy.get('form[id="book_search_too"]').submit()
    cy.get('div[id="books_list"]').should(($books) => {
      expect($books.eq(0), 'first item').to.contain('Coding')
      expect($books.eq(0), 'last item').not.contain('Harry Potter')
    })
  })
})

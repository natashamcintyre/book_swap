describe('user search for available books with free search', () => {
  it('renders list of relevant books', () => {
    cy.visit('http://localhost:3000')
    cy.get('form[id="book_search_too"]').should('exist')
    cy.get('input[id="book_search_too_input"]').type('Sapiens').should('have.value', 'Sapiens')
    cy.get('form[id="book_search_too"]').submit()
    cy.get('div[id="books_list"]').should(($books) => {
      expect($books.eq(0), 'first item').to.contain('Sapiens')
      expect($books.eq(0), 'last item').not.contain('Harry Potter')
    })
  })
})

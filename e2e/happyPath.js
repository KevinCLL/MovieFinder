describe('Happy Path', () => {
  it('Visit Movie Finder', () => {
    cy.visit('http://localhost:3000')
  })

  it('Search a movie', () => {
    cy.get('#searchbox').type('Batman')
    cy.get('#searchbutton').click()
  })

  it('Expand movie info', () => {
    cy.get('.h-moviecard').first().click()
    cy.get('.movie-card-glass').first().click()
  })
})

describe('Anecdotes', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:3000')
    cy.contains('anecdotes')
    cy.contains('Anecdote app for Full Stack Open.')
  })
  it('anecdotes page can be navigated to', function() {
    cy.visit('http://localhost:3000')
    cy.contains('anecdotes').click()
    cy.contains('If it hurts, do it more often')
  })
})
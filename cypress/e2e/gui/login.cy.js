describe('Login', () => {
  it('sucesso', () => {
    cy.login();
    cy.get('.blank-state-welcome-title').should('be.visible');
  })
})
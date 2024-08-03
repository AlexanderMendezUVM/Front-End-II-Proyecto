describe('verificar planificacion', () => {
  it('planificacion', () => {
    cy.visit('http://localhost:5173/')
    cy.get('div > .opcion').click();
    cy.get('[name="email"]').type('maria@gmail.com');
    cy.get('[name="password"]').type('123456');
    cy.get('span').click();
    cy.get(':nth-child(1) > .materia-item > .actividades').click();
    cy.get('tbody > :nth-child(2) > :nth-child(1)').should('be.visible');
  })
})
describe('VO_cypressLogin', () => {
  it('should perform the login and add a product to the cart', () => {
    cy.viewport(1072, 893);

    cy.visit('/cb/#/login');
    cy.url().should('include', '/cb/#/login');
    cy.title().should('eq', 'Vendedor Online');

    cy.get('#login-filial').click().type('1000');
    cy.get('#login-empresa').click().type('21');
    cy.get('#login-matricula').click().type('03682161').tab();
    cy.get('#login-senha').type('homolog01');
    cy.get('#vho-form-login > button').click();

    cy.get('vho-catalogo div > div:nth-of-type(1) > div').click();
    cy.get('vho-card-produto:nth-of-type(1) img').click();
    cy.get('div.detalhes__descricao').click();
    cy.get('vho-adicionar-carrinho > button').click();
    cy.get('vho-modal-deprecated button.button--selected').click();
  });
});
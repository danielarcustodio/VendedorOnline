describe('CypressCB_coder', () => {
  it('should perform the steps as described in the JSON', () => {
    // Set viewport
    cy.viewport(1190, 896);

    // Navigate to the login page
    cy.visit('/login');
    cy.url().should('eq', 'https://sit-cliente.casasbahia.com.br/login');
    cy.title().should('eq', 'Casas Bahia | Identificação');

    // Click on CPF or CNPJ input
    cy.get("[data-testid='cpfcnpj-verification-input']").click(290, 23);

    // Enter CPF or CNPJ
    cy.get("[data-testid='cpfcnpj-verification-input']").type('262.860.300-42');

    // Click on Continue button
    cy.get("[data-testid='continue-btn']").click(228, 18);

    // Click on Password input
    cy.get("[data-testid='password-input']").click(195, 29);

    // Enter Password
    cy.get("[data-testid='password-input']").type('@senha123');

    // Click on Continue button to complete login
    cy.get("[data-testid='loginCompletion-btn']").click(263, 12);
    cy.url().should('include', 'https://www.google.com/recaptcha/api2/anchor');
    cy.title().should('eq', 'Casas Bahia: Dedicação total a você!');
  });
});
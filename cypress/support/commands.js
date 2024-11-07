Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Hygor')
    cy.get('#lastName').type('Henrique')
    cy.get('#email').type('hygorhhss@outlook.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button', 'Enviar').click()
})
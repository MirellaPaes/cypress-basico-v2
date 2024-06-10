Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Mirella')
    cy.get('#lastName').type('Paes')
    cy.get('#email').type('mirella@mailinator.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()

})
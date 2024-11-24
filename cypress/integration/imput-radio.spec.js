
/// <reference types="Cypress" />

describe('Teste imput tipo radio', function(){
    beforeEach(function(){
        cy.visit('./src/index.html')
    })

    it('marcar o tipo de atendimento (feedback)', function(){
        cy.get('input[type="radio"][value="feedback"]')
        .check()
        .should('have.value', 'feedback')
    })

    it('marca cada tipo de atendimento', function(){
        cy.get('input[type="radio"]')
        .should('have.length', 3)
            .each(function($radio){
                cy.wrap($radio).check()
                cy.wrap($radio).should('be.checked')
            })
    })
})
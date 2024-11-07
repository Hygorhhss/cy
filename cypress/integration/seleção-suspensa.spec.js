/// <reference types="Cypress" />

describe('Seleção suspensa', function(){

    beforeEach(function(){
    cy.visit('./src/index.html')
    })

    it('seleciona um produto youtbe por seu texto', function() {
    cy.get('#product')
        .select('YouTube')
        .should('have.value', 'youtube')
    })

    it('selecione um produto (mentoria) por seu valor', function(){
        cy.get('#product')
            .select('mentoria')
            .should('have.value', 'mentoria')
    })

    it.only('Selecione um produto (blog) por seu  indice', function(){
        cy.get('#product')
            .select(1)
            .should('have.value', 'blog')
    })
})

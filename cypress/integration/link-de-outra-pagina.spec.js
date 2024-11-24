
/// <reference types="Cypress" />

describe ('link de outra página', function(){
    beforeEach(function(){
        cy.visit('./src/index.html')
    })

    it('teste aplicação e não browser', function(){
        cy.get('.some-link')
        .should('have.attr', 'target', '_blank')
    })

    it('removendo o atributo target do elemento', function(){
        cy.get('#link-que-abre-em-outra-pagina')
        .invoke('removeAttr', 'target')
    })

    it('verifica que a politica de privacidade abre em outra aba sem a necessidade de um clique', function(){
        cy.get('#privacy a')
        .should('have.attr', 'target', '_blank')
    })

    it('acessa a poágina de politica de privacidade removendo o target e então clicando no link', function(){
    cy.get('#privacy a')    
        .invoke('removeAttr', 'target')
        .click()

    cy.contains('Talking About Testing')
    .should('be.visible')
    })


    //foi criado outra página no integration privacy.spec.js só para testar essa (criado só o it sem o describe)//
    //realizando uma visita na página - e verificando se um elemento de texot está presente e visivel//

    it('testa a página da politica de privacidade de forma independente', function(){
    cy.visit('./src/index.html')
    cy.get('#privacy a')
        .invoke('removeAttr', 'target')
        .click()
        cy.contains('Talking About Testing')
        .should('be.visible')
    })
})
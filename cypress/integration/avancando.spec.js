/// <reference types="Cypress" />

describe ('avançando com o cypress', function(){
    beforeEach(function(){
        cy.visit('./src/index.html')
    })

    it('exibe mensagem por 3 segundos', function(){
        cy.clock()
        cy.get('.button')
    })

    //it('apenas um teste para ver se após commit/push aparece no meu desktop pessoal')//

})
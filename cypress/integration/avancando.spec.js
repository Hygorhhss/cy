/// <reference types="Cypress" />

describe ('avançando com o cypress', function(){
    beforeEach(function(){
        cy.visit('./src/index.html')
    })

    it('exibe mensagem por 3 segundos', function(){
        cy.clock()
        cy.get('.button')
    })


    Cypress._.times(5, () =>{
        it('como teste irá repetir 5 vezes', () => {
            cy.get('#firstName').type('Hygor')
        })
    })
    
    it('Mostrar o "conteúdo" e a quantia de vezes que é para repetir', () => {
        const longText = Cypress._.repeat ('sdfadadasda', 20)

        cy.visit('./src/index.html')

        cy.get('#open-text-area')
            .invoke('val', longText)
            .should('have.value', longText)
    })

    it('exibe e esconde as mensagens de sucesso e erro usando o .invoke', () => {
        cy.get('.success')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')
      .and('contain', 'Mensagem enviada com sucesso.')
      .invoke('hide')
      .should('not.be.visible')
    cy.get('.error')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')
      .and('contain', 'Valide os campos obrigatórios!')
      .invoke('hide')
      .should('not.be.visible')

    })

    it('preenche a area de texto usando o comando invoke', () => {
        cy.visit('./src/index.html')
        cy.get('#open-text-area')
            .invoke('val', 'Preencher o campo')
            .should('have.value', 'Preencher o campo')
    })


    it.only('faz uma requisição HTTP', () => {
        cy.request('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
            .as('getRequest')
            .its('status')
            .should('be.equal', 200)

        cy.get('@getRequest')
            .its('statusText')
            .should('be.equal', 'OK')
            
        cy.get('@getRequest')
            .its('body')
            .should('include', 'CAC TAT')
    })
    
    it.only('encontrar o gato', () => {

        cy.visit('./src/index.html')
        cy.get('span#cat')
            .invoke('show')
            .should('be.visible')
        cy.get('#title')
            .invoke('text', 'PetZone')
        cy.get('#subtitle')
            .invoke('text', 'Bulldogsddddd')
        
    })



    })
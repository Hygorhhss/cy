/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {

    const THREE_SECONDS_IN_MS = 3000

    beforeEach(function (){
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('preencher os campos obrigatórios e envia o formulário', function() {
        const longText = 'test, test, test, test, test, test, test, test, test, test, test, '

        cy.clock()

        cy.get('#firstName').type('Hygor')
        cy.get('#lastName').type('Henrique')
        cy.get('#email').type('email_teste@outlook.com')
        cy.get('#open-text-area').type(longText, {delay:0})
        cy.contains('button', 'Enviar').click()
        cy.get('.success').should('be.visible')

        cy.tick(THREE_SECONDS_IN_MS)

        cy.get('.success').should('not.be.visible')
    })

    it('preenhce os campos obrigatorios e envia o formulário', function() {

        cy.clock()

        cy.get('#firstName').type('Hygor')
        cy.get('#lastName').type('Henrique')
        cy.get('#email').type('hygor@outlook,com')
        cy.get('#open-text-area').type('teste')
        cy.contains('button', 'Enviar').click()

        cy.get('.error').should('be.visible')

        cy.tick(THREE_SECONDS_IN_MS)

        cy.get('.error').should('not.be.visible')
    })

    it('campo vazio caso inserido valor não númerico', function(){
        cy.get('#phone')
        .type('abcdefg')
        .should('have.value', '')
    })

    it('Prenchimento de todos os campos', function(){

        cy.clock()

        cy.get('#firstName').type('Hygor')
        cy.get('#lastName').type('Henrique')
        cy.get('#phone-checkbox').click
        cy.get('#open-text-area').type('teste')
        cy.contains('button', 'Enviar').click()

        cy.get('.error').should('be.visible')
        
        cy.tick(THREE_SECONDS_IN_MS)

        cy.get('.error').should('not.be.visible')

    })

    it('Preenche e limpa os campos nome, sobrenome, email e telefone', function(){
        cy.get('#firstName')
            .type('Hygor')
            .should('have.value', 'Hygor')
            .clear()
            .should('have.value', '')
        cy.get('#open-text-area')
            .type('Somente um teste para apagar')
            .should('have.value', 'Somente um teste para apagar')
            
    })

    it('mensagem de erro ao submeter o formulário sem preeencher os campos obrigatorios', function(){

        cy.clock()

        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')

        cy.tick(THREE_SECONDS_IN_MS)

        cy.get('.error').should('not.be.visible')
    })

    it('Envia o formulario com sucesso usando um comando customizado',function(){
        cy.fillMandatoryFieldsAndSubmit()

        cy.clock()

        cy.get('.success').should('be.visible')

        cy.tick(THREE_SECONDS_IN_MS)
    })
  })
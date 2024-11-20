/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {

    beforeEach(function (){
        cy.visit('./src/index.html')
    })

    it.only('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it.only('preencher os campos obrigatórios e envia o formulário', function() {
        const longText = 'test, test, test, test, test, test, test, test, test, test, test, '
        cy.get('#firstName').type('Hygor')
        cy.get('#lastName').type('Henrique')
        cy.get('#email').type('email_teste@outlook.com')
        cy.get('#open-text-area').type(longText, {delay:0})
        cy.contains('button', 'Enviar').click()
        cy.get('.success').should('be.visible')
    })

    it('preenhce os campos obrigatorios e envia o formulário', function() {
        cy.get('#firstName').type('Hygor')
        cy.get('#lastName').type('Henrique')
        cy.get('#email').type('hygor@outlook,com')
        cy.get('#open-text-area').type('teste')
        cy.contains('button', 'Enviar').click()

        cy.get('.error').should('be.visible')
    })

    it('campo vazio caso inserido valor não númerico', function(){
        cy.get('#phone')
        .type('abcdefg')
        .should('have.value', '')
    })

    it('', function(){
        cy.get('#firstName').type('Hygor')
        cy.get('#lastName').type('Henrique')
        cy.get('#phone-checkbox').click
        cy.get('#open-text-area').type('teste')
        cy.contains('button', 'Enviar').click()

        cy.get('.error').should('be.visible')

    })

    it('Preenche e limpa os campos nome, sobrenome, email e telefone', function(){
        cy.get('#firstName')
            .type('Hygor')
            .should('have.value', 'Hygor')
            .clear()
            .should('have.value', '')
    })

    it('mensagem de erro ao submeter o formulário sem preeencher os campos obrigatorios', function(){
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')

    })

    it('Envia o formulario com sucesso usando um comando customizado',function(){
        cy.fillMandatoryFieldsAndSubmit()

        cy.get('.success').should('be.visible')
    } )
  })
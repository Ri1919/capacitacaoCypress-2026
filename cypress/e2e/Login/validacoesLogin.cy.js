/// <reference types="cypress" />

describe('Biblioteca - Validar Login',()=>{
    beforeEach(() => {
        cy.visit('index.html')
    });

    it("Realizar login com credenciais válidas",()=>{
        cy.visit('index.html')
        cy.get('#login-email').type('qa@biblioteca.com')
        cy.get('[data-cy="login-password"]').type('Cypress123!')
        cy.get('button[data-cy="login-submit"]').click()
        //Validar se a tela inicial da aplicação é exibida
        cy.get('[data-cy="current-user"]').should('be.visible')
        cy.get('[data-cy="current-user"]').should('have.text','QA Demonstração')
    })

    it('Realizar Cadastro de Usuario', () => {
        cy.visit('index.html')
        cy.get('[data-cy="tab-register"]').click()
        cy.get('[data-cy="register-name"]').type('Ric')
        cy.get('[data-cy="register-email"]').type('teste@test.com')
        cy.get('[data-cy="register-password"]').type('Cypress123')
        cy.get('[data-cy="register-confirm-password"]').type('Cypress123')
        cy.get('[data-cy="register-phone"]').type('83 988457625')
        cy.get('[data-cy="register-profile"]').select('colaborador')
        cy.get('[data-cy="notification-none"]').check()
        cy.get('#terms').check()
        cy.get('[data-cy="register-submit"]').click()
        //Ao criar a conta o sistema deve 
        cy.get('[data-cy="register-message"]').should('have.text', 'Cadastro realizado com sucesso! Você já pode entrar.');
    });

    it('Realizar login com email inválido', () => {
        cy.get('#login-email').type('teste@gmail.com')
        cy.get('[data-cy="login-password"]').type('Cypress123!')
        cy.get('button[data-cy="login-submit"]').click()
        //Então a mensagem de email/senha inválida deve estar visivel
        cy.get('div[class="notice show error"]').should('be.visible')
        //Validar se contem o texto: E-mail ou senha inválidos.
        
    });
})

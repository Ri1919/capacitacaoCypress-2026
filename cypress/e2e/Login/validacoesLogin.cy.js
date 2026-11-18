/// <reference types="cypress" />

describe('Biblioteca - Validar Login',()=>{
    beforeEach(() => {
        cy.visit('/')
    });

    it("Realizar login com credenciais válidas",()=>{
        cy.get('#login-email').type('qa@biblioteca.com')
        cy.get('[data-cy="login-password"]').type('Cypress123!')
        cy.get('button[data-cy="login-submit"]').click()
        //Validar se a tela inicial da aplicação é exibida
        cy.get('[data-cy="current-user"]').should('be.visible')
        cy.get('[data-cy="current-user"]').should('have.text','QA Demonstração')
    })

    it('Realizar Cadastro de Usuario', () => {
        cy.get('[data-cy="tab-register"]').click()
        cy.get('[data-cy="register-name"]').type('Dayane')
        cy.get('[data-cy="register-email"]').type('dayane@test.com')
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
        cy.get('#login-email').type('dayane@gmail.com')
        cy.get('[data-cy="login-password"]').type('Cypress123!')
        cy.get('button[data-cy="login-submit"]').click()
        cy.get('div[id="login-panel"] > h2').should('have.text','Acesse sua conta')
        
    });

    it('Realizar logout', () => {
        cy.get('#login-email').type('qa@biblioteca.com')
        cy.get('[data-cy="login-password"]').type('Cypress123!')
        cy.get('button[data-cy="login-submit"]').click()
        cy.get('[data-cy="current-user"]').should('be.visible')
        cy.get('[data-cy="logout-button"]').click()
        cy.get('div[id="login-panel"] > h2').should('have.text','Acesse sua conta')
    });

    it.only('Realizar login válido usando o fixtures', () => {
        cy.fixture('usuarios').then((massaDados) =>{
            const usuario = massaDados["valido"];
            cy.get('#login-email').type(usuario.email)
            cy.get('[data-cy="login-password"]').type(usuario.senha)
        })
        cy.get('button[data-cy="login-submit"]').click()
        cy.get('[data-cy="current-user"]').should('be.visible')
        cy.get('[data-cy="current-user"]').should('have.text','QA Demonstração')

    });
    //Fazer o teste usando o usuario invalido
})


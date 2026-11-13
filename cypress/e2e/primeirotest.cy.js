/// <reference types="cypress" />

describe('Biblioteca - Validar Login',()=>{

    it("Realizar login com credenciais válidas",()=>{
        cy.visit('index.html')
        cy.get('#login-email').type('qa@biblioteca.com')
        cy.get('[data-cy="login-password"]').type('Cypress123!')
        cy.get('button[data-cy="login-submit"]').click()
    })

    it('Realizar Cadastro de Usuario', () => {
        cy.visit('index.html')
        cy.get('[data-cy="tab-register"]').click()
    });
})
/// <reference types="cypress" />

describe('Validações da página de Cadastro de Livros', () => {

    //Realizar Login
    beforeEach(() => {
        cy.visit('/')
        cy.get('#login-email').type('qa@biblioteca.com')
        cy.get('[data-cy="login-password"]').type('Cypress123!')
        cy.get('button[data-cy="login-submit"]').click()
        cy.get('[data-cy="current-user"]').should('be.visible')
        cy.get('[data-cy="current-user"]').should('have.text','QA Demonstração')
        cy.get('button').contains('Cadastrar livro').click()
        cy.get('div[id="view-book-form"] > h2').should('have.text','Cadastrar livro')
    });

    it('Cadastrar novo livro de Ação', () => {
        //Adicionar script para os campos: ISBN, Ano de publicação e Quantidade
        cy.get('[data-cy="book-title"]').type('1984')
        cy.get('[data-cy="book-author"]').type('George Orwell')
        cy.get('[data-cy="book-isbn"]').type('123456')
        cy.get('[data-cy="book-year"]').type('1949')
        cy.get('#category').select('Ficção')
        cy.get('#category').should('have.value','Ficção')
        //cy.get('#quantity').clear()
        cy.get('#quantity').clear().type('5')
        cy.get('#quantity').should('have.value','5')
        cy.get('input[data-cy="condition-good"]').check()
        cy.get('input[data-cy="condition-good"]').should('be.checked')
        cy.get('[data-cy="condition-new"]').should('not.be.checked')
        cy.get('[data-cy="condition-used"]').should('not.be.checked')
        cy.get('#featured').check()
        cy.get('button').contains('Salvar livro').click()
        cy.get('div[class="notice show success"]').should('have.text','Livro cadastrado com sucesso!')
        //Criar a validação de uma tabela
    });

        it('Cadastrar novo livro usando o fixtures', () => {
        //Fazer o cadastro usando algum dos livros do arquivo livros.json
    });
    
});

    
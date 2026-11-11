/// <reference types="cypress" />

describe('Acessar google', () => {
    
    it('Acessar url com sucesso', () =>{
        cy.visit('https://www.google.com')
    })
})
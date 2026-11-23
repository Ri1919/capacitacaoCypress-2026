/// <reference types="cypress" />

import LoginPage from "../../support/pages/loginPage";

describe('Validar Campos Obrigatorios', () => {
    const loginPage = new LoginPage()
    beforeEach(() => {
        cy.visit('/')
    });

    it('Validar Campo Email Obrigatório', () => {
        //loginPage.preencherCampoEmail("")
        loginPage.preencherCampoSenha("Cypress123!")
        loginPage.clicarNoBotaoEntrar()
        //loginPage.validarEmailObrigatorio()
        loginPage.validarMensagemCampoObrigatorio("Informe o e-mail.")
    });

    it('Validar Campo Senha Obrigatório', () => {
        loginPage.preencherCampoEmail("qa@gmail.com")
        //loginPage.preencherCampoSenha("Cypress123!")
        loginPage.clicarNoBotaoEntrar()
        loginPage.validarMensagemCampoObrigatorio("Informe a senha.")
    });

});
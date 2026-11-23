 class LoginPage {
    clicarNoBotaoEntrar(){
        cy.get(this.elementos.botaoEntrar).click()
    }

    validarEmailObrigatorio(){
        cy.get('span[class="err"]').should('have.text',"Informe o e-mail.")
    }

    validarMensagemCampoObrigatorio(msg){
        cy.get('span[class="err"]').should('have.text',msg)
    }
} export default LoginPage

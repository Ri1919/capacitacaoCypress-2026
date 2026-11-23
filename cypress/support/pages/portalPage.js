class PortalPage{

    elementos = {
        usuarioLogado: '[data-cy="current-user"]',
        botaoSair: '[data-cy="logout-button"]'
    }

    clicarNobotaoSair(){
        cy.get(this.elementos.botaoSair).click()
    }

    validarUsuarioLogado(usuario){
        cy.get(this.elementos.usuarioLogado).should('have.text',usuario)
    }

} export default PortalPage
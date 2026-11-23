import LoginPage from "../../support/pages/loginPage";
import PortalPage from "../../support/pages/portalPage";

describe('Validação do Login usando Page Object', () => {
    const loginPage = new LoginPage()
    const portalPage = new PortalPage()
    beforeEach(() => {
        cy.visit('/')
    });

    it('Realizar Logout', () => {
         cy.fixture('usuarios').then((massaDados) =>{
            const usuario = massaDados["valido"];
            loginPage.preencherCampoEmail(usuario.email)
            loginPage.preencherCampoSenha(usuario.senha)
        })
        loginPage.clicarNoBotaoEntrar()
        portalPage.validarUsuarioLogado("QA Demonstração")
        portalPage.clicarNobotaoSair()  
    });

    it('Realizar Login com sucesso', () => {
        cy.fixture('usuarios').then((massaDados) =>{
            const usuario = massaDados["valido"];
            loginPage.preencherCampoEmail(usuario.email)
            loginPage.preencherCampoSenha(usuario.senha)
        })
        loginPage.clicarNoBotaoEntrar()
        portalPage.validarUsuarioLogado("QA Demonstração")
    });
    
});
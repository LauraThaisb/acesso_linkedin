//Comando especial para VS Code. Exibe sugestões de complemento de comandos do Cypress enquanto digitamos.
<reference types= "Cypress"/>

import cypress from "cypress"
import linkedinElements from "../elements/LinkedinElements"
const linkedinElements = new linkedinElements
const url = cypress.config("baseUrl")

class linkedinPage {

    // Acessa o site que queremos testar
    acessarSite() {
        cy.visit(url)
    }

    // Verifica se o botão tem o texto "Pesquisa Google"
    visualizarPesquisaGoogle() {
        cy.get(loginElements.pesquisaGoogle()).should('contain', 'Pesquisa Google')
    }


}

//Comando para exportar a *Page.js e possibilitar sua importação no arquivo *Steps.js.
export default linkedinPage;
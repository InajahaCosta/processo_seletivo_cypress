/// <reference types="Cypress" />

import elementsLoja from "./elements";
const ElementsLoja = new elementsLoja

class pageObjectLoja{
    inserirDados(email,password){
        cy.get(ElementsLoja.campoEmail()).type(email)
        cy.get(ElementsLoja.campoPassword()).type(password)
    }
    clicarEntrar(){
        cy.get(ElementsLoja.botaoEntrar()).click()
    }   
    acessarHomePage(resultado){
        if(resultado == "sucesso"){
            cy.get(ElementsLoja.homePage()).should('contain',"Bem Vindo") 
        }
        else if(resultado == "falha"){
            cy.get(ElementsLoja.erroLogin()).should('contain',"Email e/ou senha inválidos") 
        }
    }
}
export default pageObjectLoja;
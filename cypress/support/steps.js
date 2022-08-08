import pageObjectLoja from './pageObject'
const PageObjectLoja = new pageObjectLoja

Given("acesso pagina de login", () => {
	cy.visit('/login')
})

When("informo meu dados {string} e {string}", (email,password) => {
	PageObjectLoja.inserirDados(email,password)
})
And ("clicar em entrar na conta",()=>{
	PageObjectLoja.clicarEntrar()
})
Then ("devo obter {string}", (resultado)=>{
	PageObjectLoja.acessarHomePage(resultado)
})
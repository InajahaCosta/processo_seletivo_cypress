import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps';
import * as user from './actions';

Given(/^que eu acesso a loja$/, () => {
	cy.visit('/')
});

When(/^desejo realizar o login$/, (operacaoDesejada) => {
	Cypress.env('login', operacaoDesejada)
});

When(/^informo meu dados "([^"]*)" e "([^"]*)"$/, (email,password) => {
	cy.get(imput,email.from-control)
	cy.get(imput,password.from-control)

	//informar email
	//informar password
	cy.get('@dados').contains(email).click
	cy.get('@dados').contains(password).click
});

Then(/^entrar conta$/, () => {
	cy.get('@dados').contains("Entrar").click
});


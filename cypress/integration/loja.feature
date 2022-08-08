@LOJA
Feature: Como usuario, desejo realizar meu login.

Scenario: Login com sucesso
  Given acesso pagina de login
  When informo meu dados "fulano@qa.com" e "teste"
  And clicar em entrar na conta
  Then devo obter "sucesso"

Scenario: Login sem sucesso
  Given acesso pagina de login
  When informo meu dados "email invalido" e "teste"
  And clicar em entrar na conta
  Then devo obter "falha"
          

 
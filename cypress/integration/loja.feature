#language : pt
funcionalidade: Loja

  Como usuario, desejo realizar meu login.

Cenario: Login
  Dado que eu acesso a loja
  E desejo realizar o login
  When informo meu dados "login" e "senha"
  And entrar conta
  then devo obter o resultado
          
Esquema do Cenario: fazer login
  Dado que eu acesso o login
  Quando informar os dados
  E finalizar o login
  Entao devo entrar no site

 
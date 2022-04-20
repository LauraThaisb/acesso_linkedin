#language: pt

Feature:  Acessar Perfil Profissional no Linkedin

Contexto: 
    Dado que estou na pagina do GOOGLE

Scenario: Pesquisar perfil no Linkedin
    Given a pesquisa pelo meu usuário do Linkedin
    And adicionei o termo Linkedin
    When clicar em pesquisar
    Then deve me apresentar nas opções encontradas, o meu perfil

Scenario: Acessar perfil no Linkedin
    Given a pesquisa concluida pelo meu usuário do Linkedin
    When clicar acessar o link retornado
    Then deve apresentar meu perfil no Linkedin
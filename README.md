# *___ SEARCH DEV ___ *

# Consulte o repositório de seus Dev's favoritos

Projeto desenvolvido à partir do [desafio-reactjs](https://github.com/devMozao/desafio-reactjs), oferecido gentilmente por [devMozao](https://github.com/devMozao) (Diogo Fonseca), com o objetivo de permitir que desenvolvedores iniciantes da comunidade FrontEnd possam testar seus conhecimentos e avaliar o seu nível na área.

Trata-se de uma aplicação que permite entrar com o nome de um usuário do GitHub na página inicial e listar seus dados e repositórios que são públicos, requisitados à partir da Api disponibilizada pelo próprio GitHub (veja a documentação [aqui](https://docs.github.com/en/rest
))

Este projeto foi criado usando o Boilerplate [Create Next App](#).

## `Instalação do projeto`

### PRÉ REQUISITOS:

* **`NodeJS`** - versão *14.2.0* ou superior;
* **`npm`** - versão *7.15.0* ou superior;
* **`yarn`** - (opção ao `npm`) - versão *1.22.4* ou superior;

Para a instalação do projeto, uma vez que se fez o fork ou o download do projeto em sua máquina, acessar a pasta *`'serach-dev'`* e rodar o comando **`npm install`** através do terminal e serão baixadas e instaladas todas as dependências necessárias para o uso da aplicação.

Uma vez que a instalação tenha sido concluída, basta rodar o comando **`npm start`** no terminal e o servidor de desenvolvimento será iniciado abrindo em seguida uma janela do navegador com a página inicial da aplicação. Este servidor tem "auto-reload", ou seja, toda a alteração que for feita no projeto, será carragada automaticamente.

## `Build para deploy`

Para rodar o build para fazer o deploy da aplicação, basta rodar na pasta do projeto o comando **`npm build`**, e será criada uma pasta build com o projeto otimizado, pronto para o deploy.

## `NPM ou YARN`

Pode-se usar o gerenciador de sua preferência, pois tanto o `NPM` quanto o `YARN` são aceitos pelas dependências utilizadas, sem problemas, mas é recomendável que, uma vez escolhido um deles, use apenas o escolhido, pois pode dar problemas de scripts no desenvolvimento e no build.

## CONSIDERAÇÕES FINAIS

A stack que escolhi para realizar esse projeto foi o uso de NextJS, através do boilerplate `Create-Next-APP`, estilizado por `Styled-Components` e com requisição para a API via `Fetch API`.

Escolhi essa stack, pela simplicidade do projeto, em termos de estilos, tendo sido resolvido basicamente com Flexbox, sem a necessidade de uso algum pré-processador de CSS. 

Em relação à requisição, usei Fetch API, pois atende bem sem a necessidade de usar alguma biblioteca adicional, reduzindo o número de dependências.

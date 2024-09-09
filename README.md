# Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Objetivos](#objetivos)
  - [1 - Header](#1---header)
  - [2 - Barra de buscas](#2---barra-de-buscas)
  - [3 - Adição de novo contato](#3---adição-de-novo-contato)
  - [4 - Lista de cards](#4---lista-de-cards)
  - [5 - Card de contato](#5---card-de-contato)
  - [6 - Deleção de contato](#6---deleção-de-contato)
  - [7 - Edição de contato](#7---edição-de-contato)
  - [8 - Estilização](#8---estilização)
- [Deployment](#deployment)

# Sobre o Projeto 

Nesse projeto, o objetivo era criar uma aplicação que consumisse uma [API com dados sobre contatos](https://github.com/1lucascq/Contacts-bk) abordando os seguintes tópicos:
 - Construção através do uso de Hooks;
 - Criação do Front seguindo os conceitos de Mobile First;
 - Uso de libs para estilização;
 - Possibilidade de adição de contatos;
 - Possibilidade de deleção de contatos;
 - Possiblidade de edição de contatos;
 - Filtragem de contatos por nome.

# Objetivos

- A realização de todos os objetivos deve ser feita com o uso de Hooks e seguindo as regras do Mobile First.
- A requisição dos contatos na API retorna um array de objetos com as seguintes chaves: `name: string`, `email: string`, `image: string`, `phoneNumbers: numbers[]`.

## 1 - Header
- Cria um Header para a aplicação contendo:
  - Um botão para adição de um novo contato;
  - Uma barra de buscas;
  - Um título.

## 2 - Barra de buscas
- A Barra de Buscas deve possibilitar a pesquisa de usuários através do nome;
- A exibição dos contatos deve ser feita concomitantemente ao input realizado pelo usuário.
  
## 3 - Adição de novo contato
- O botão de adição de novo contato deverá abrir uma formulário para adição de novo contato de forma agradável ao usuário;
- A adição deve refletir no banco de dados usado pelo BackEnd.
- Ao adicionar um novo contato, um novo fetch deverá ser realizado para pegar novamente os dados do backend.

## 4 - Lista de cards
- Cria um campo que deve receber uma lista de cards com informações dos contatos.

## 5 - Card de contato
- O Card deve conter:
  -  Nome, email e telefones do contato;
  -  A imagem fornecida;
  -  Um botão para deleção do contato;
  -  Um botão para edição do contato.

## 6 - Deleção de contato
- O botão de deleção do contato deverá excluir o contato permanentemente;
- A deleção deve refletir no banco de dados usado pelo BackEnd.
- Ao deletar um contato, a lista de contatos deve ser atualizada.

## 7 - Edição de contato
- O botão de edição do contato deverá editarr o contato permanentemente;
- A edição deve refletir no banco de dados usado pelo BackEnd.
- Ao editar um contato, a lista de contatos deve ser atualizada.

## 8 - Estilização
- Estilizar a aplicação através do uso de alguma biblioteca popular no mercado.

#Deployment
link: https://contacts-ft.netlify.app/
- A design da aplicação deverá seguir conceitos Mobile First.


# Deployment
- O deploy da aplicação se encontra [AQUI](https://contacts-ft.netlify.app/).

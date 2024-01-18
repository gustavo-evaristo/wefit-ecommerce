# Projeto WeMovies

Este projeto foi desenvolvido como parte do processo seletivo para a vaga de desenvolvedor React na WeFit. O desafio consistia na criação de um site de e-commerce simplificado utilizando as tecnologias React, TypeScript e styled-components. A aplicação possui três telas: Home, Carrinho e Compra Realizada.

## Instruções de Execução

Para executar o projeto, siga os passos abaixo:

- Clone o repositório: `git clone https://github.com/gustavo-evaristo/wefit-ecommerce.git`
- Instale as dependências: `npm install` ou `yarn install`
- Inicie a aplicação e o servidor da API de forma simultânea: `npm run dev` ou `yarn dev`
- A aplicação estará disponível em `http://localhost:5173` e o servidor da api em `http://localhost:3000`.

## Estrutura do Projeto

A estrutura do projeto segue as melhores práticas de organização de pastas. Os principais diretórios são:

- src: Contém o código-fonte da aplicação.
- components: Componentes React reutilizáveis.
- pages: Componentes específicos de cada página (Home, Carrinho, Compra Realizada).
- styles: Estilos globais e temas.
- utils: Utilitários diversos.
- routes: Rotas disponíveis.
- hooks: Hooks customizados.
- store: Gerenciamento de estados da aplicação.
- @types: Tipagens globais.
- api: Simulação de uma api.
- layouts: Layout da aplicação com o header fixo.
- services: configurações do axios para acessar a api.

## Tecnologias Utilizadas

O projeto utiliza as seguintes tecnologias e bibliotecas:

- React
- TypeScript
- Styled-components
- Zustand
- React Query
- Axios

## Funcionalidades

A aplicação possui as seguintes funcionalidades:

- Home: Realiza uma requisição na API para obter a lista de filmes disponíveis para compra.

- Carrinho: Permite visualizar e gerenciar os itens adicionados ao carrinho, calcular o valor total e remover itens individualmente. Se o carrinho estiver vazio, é exibida a tela de "Carrinho Vazio" com a opção de voltar para a tela inicial.

- Compra Realizada: Após confirmar o pedido no carrinho, o usuário é redirecionado para a tela de compra realizada, onde também há a opção de voltar para a tela inicial.

## Considerações finais

Durante o desenvolvimento deste projeto, optei por utilizar a biblioteca Zustand para gerenciar os estados globais da aplicação. A escolha por Zustand se mostrou crucial, especialmente pela sua simplicidade de uso e eficiência na gestão de estados. Além disso, a capacidade do Zustand de persistir os estados mesmo após um recarregamento da página foi um aspecto fundamental para garantir uma experiência contínua ao usuário.

Na parte de requisições HTTP, adotei a biblioteca React Query para armazenar chamadas em cache. O React Query facilitou significativamente a interação com a API simulada, oferecendo uma solução robusta para manter os dados atualizados e minimizar as chamadas desnecessárias à API.

Também optei por incluir um arquivo yaml para realizar a validação do código de forma automatizada com o github actions, toda vez que realizo alguma alteração no código, o script é executado e valida se as novas alterações estão de acordo com o lint style do projeto.

PRIORIDADE 0 - Criar o campo de busca da tela principal, a listagem de produtos, inicialmente vazia. A listagem vazia deve conter a mensagem "Digite algum termo de pesquisa ou escolha uma categoria" (veja os detalhes do card).

- [Tela principal - Antes da busca](https://github.com/my-org/my-repo/tree/master/wireframes/card_02.png)

**Observações técnicas**

**Requisito 2.** A tela básica da plataforma é a tela de **listagem de produtos**, onde quem usa buscará o que quer para adicionar ao carrinho e filtrará suas buscas.

  * Esta página deve ficar no path `/`, renderizável a partir do acesso ao componente `<App />`.
  * Mostre a mensagem `"Digite algum termo de pesquisa ou escolha uma categoria."`.
  * Adicione o atributo `data-testid` com o valor `home-initial-message` no elemento da mensagem.

**O que será avaliado:**

  * A raiz da aplicação, em `<App />`, renderiza com sucesso
  * A tela contém a mensagem pedida: 'Digite algum termo de pesquisa ou escolha uma categoria.'

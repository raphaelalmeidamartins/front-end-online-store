PRIORIDADE 4 - Adicionar ao ícone do carrinho, em todas as telas em que ele aparece, um número com a quantidade de produtos adicionados (veja os detalhes no card).

- [Tela - Listagem de produtos com carrinho e quantidade](https://github.com/my-org/my-repo/tree/master/wireframes/card_13.png)

**Observações técnicas**

**Requisito 13.** A partir de uma pesquisa com usuários e concorrentes, identificamos que existe a necessidade de uma visualização da quantidade de produtos do carrinho de uma forma dinâmica e acessível.

  * Adicione o atributo `data-testid` com o valor `shopping-cart-size` no elemento que contém a quantidade de produtos presente na lista.
  * A quantidade a ser exibida é o número total de itens, ou seja, se a pessoa adiciona o produto1 5 vezes e o produto2 2 vezes, o valor a ser exibido é 7.
  * Esse elemnento deve ser visível da página de listagem de produtos e da página de detalhes de produto.

**O que será avaliado:**

  * Vê a quantidade de produtos no carrinho da tela de listagem
  * Vê a quantidade de produtos no carrinho da tela de detalhes

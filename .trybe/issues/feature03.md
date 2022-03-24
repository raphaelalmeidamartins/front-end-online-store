PRIORIDADE 1 - Criar o botão de carrinho de compras na tela principal, de listagem de produtos, e criar uma tela para o carrinho de compras, inicialmente vazio (veja os detalhes do card).

- [Tela do carrinho de compras](https://github.com/my-org/my-repo/tree/master/wireframes/card_03.png)
- [Tela principal - Com botão do carrinho de compras](https://github.com/my-org/my-repo/tree/master/wireframes/bonus_shopping_cart_button.png)

**Observações técnicas**

**Requisito 3.** Quem usa o site irá adicionar produtos em seu carrinho de compras e finalizar a compra. A listagem de produtos deve ter um ícone de carrinho que, ao ser clicado, leva à página do carrinho. Inicialmente, o carrinho deverá estar vazio.

  * O elemento com o ícone de carrinho de compras deve ficar visível na página inicial (listagem de produtos) e também na página de detalhes de um produto (descrita posteriormente)
  * Adicione o atributo `data-testid` com o valor `shopping-cart-button` no elemento com o ícone de carrinho de compras.
  * Mostre a mensagem `"Seu carrinho está vazio"` na página de carrinho de compras quando não existirem produtos no carrinho de compras.
  * Adicione o atributo `data-testid` com o valor `shopping-cart-empty-message` no elemento da mensagem.

**O que será avaliado:**

  * A home deve ter o botão do carrinho de compras
  * Clicar no botão deve levar à página do carrinho vazio, com a mensagem 'Seu carrinho está vazio' nela

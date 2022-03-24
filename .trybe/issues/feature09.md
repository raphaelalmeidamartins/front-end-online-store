PRIORIDADE 3 - Na tela de listagem de produtos, permitir adicionar o produto ao carrinho (veja os detalhes no card).

- [Tela principal - Adicionar ao carrinho na exibição detalhada](https://github.com/my-org/my-repo/tree/master/wireframes/card_13.png)

**Observações técnicas**

**Requisito 9.** Poder adicionar produtos ao carrinho a partir de sua tela de exibição detalhada será um canal importante de conversões de venda.

  * Adicione o atributo `data-testid` com o valor `product-detail-add-to-cart` no elemento que possui a ação de adicionar o produto ao carrinho de compras.
  * Adicione o atributo `data-testid` com o valor `shopping-cart-product-name` no elemento que possui o nome do produto na tela do carrinho de compras. Você deve adicionar esse atributo para todos os produtos.
  * Adicione o atributo `data-testid` com o valor `shopping-cart-product-quantity` no elemento que possui a quantidade do produto na tela do carrinho de compras. Você deve adicionar esse atributo para todos os produtos.

**O que será avaliado:**

  * Adiciona um produto ao carrinho da sua tela de detalhes

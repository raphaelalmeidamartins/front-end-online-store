PRIORIDADE 3 - Como pessoa usuária, eu quero clicar no card do produto e visualizar a exibição detalhada do produto com nome do produto, imagem, preço e especificação técnica. A tela também deve possuir um botão que leve ao carrinho de compras (veja os detalhes no card).

- [Tela - Detalhamento do produto](https://github.com/my-org/my-repo/tree/master/wireframes/card_07.png)

**Observações técnicas**

**Requisito 7.** A exibição detalhada de um produto será a página para exibir tudo o que se tem acerca de um produto específico.

  * Adicione o atributo `data-testid` com o valor `product-detail-link` no elemento que ao ser clicado, enviará a pessoa que usa a aplicação para a página de detalhes do produto. Você deve adicionar esse atributo para todos os produtos.
  * Adicione o atributo `data-testid` com o valor `product-detail-name` no elemento que possui o nome do produto na tela de detalhes.

**O que será avaliado:**

  * Clicar no card produto leva à página com seus detalhes

PRIORIDADE 1 - Listar filtros de categoria obtidos da API na tela principal, de listagem do produto. A requisição da API para recuperar as categorias deve ser feita uma única vez após o carregamento da tela (veja os detalhes do card).

- [Tela principal - Com a lista de categorias](https://github.com/my-org/my-repo/tree/master/wireframes/card_04.png)

**Observações técnicas**

**Requisito 4.** Um endpoint da API do Mercado Livre retorna as categorias de produto disponíveis para busca. Em momento posterior tais categorias serão usadas para filtrar a listagem de produtos. Por hora, elas devem ser listadas na tela da listagem, conforme protótipo.

  * Adicione o atributo `data-testid` com o valor `category` nos elementos que possuem os nomes das categorias

**O que será avaliado:**

  * Exibe as categorias retornadas pela API na página de listagem de produtos

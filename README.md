# LzRStore

A LzRStore é uma vitrine fictícia de eletrônicos criada para demonstrar conceitos de front‑end com HTML, CSS e JavaScript puros.
O projeto simula um e‑commerce moderno, permitindo filtrar produtos por categoria ou busca, visualizar detalhes em um modal interativo e navegar por páginas institucionais e de atendimento. 
Tudo foi pensado para oferecer uma experiência de compra simples, rápida e agradável, sem dependência de frameworks externos.

## Estrutura
- **index.html** – página principal com cabeçalho de busca, navegação por categorias, sessão de destaque, grade dinâmica de produtos e rodapé completo.
- **script.js** – mantém a lista de produtos e funções para:
  - renderizar itens dinamicamente
  - filtrar por categoria (`?cat=`)
  - pesquisar produtos (`?q=`) a partir de qualquer página
  - abrir modal com detalhes do produto
- **styles.css** – estilos globais, animações do modal, layout responsivo e cartões de serviços.
- **pages/** – páginas estáticas adicionais:
  - `pages/institucional/` (sobre nós, lojas, políticas, etc.)
  - `pages/atendimento/` (central de ajuda, política de trocas, FAQ…)


## Como testar
Abra `index.html` em um navegador e utilize a barra de busca ou os botões para filtrar produtos. Acesse as páginas em `pages/` para conferir o comportamento da busca interna.

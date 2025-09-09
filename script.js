// Array de produtos contendo todos os itens que serão exibidos na tela
let produtos = [
  {
    id: 1,
    nome: "iPhone 15 Pro",
    categoria: "smartphones",
    preco: 7.999,
    precoOriginal: 8.999,
    desconto: 11,
    imagem:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400",
    descricao: "Smartphone Apple com câmera avançada",
    detalhes: "Chip A17 Pro, câmera tripla e design em titânio.",
  },
  {
    id: 2,
    nome: "MacBook Air M2",
    categoria: "laptops",
    preco: 8.999,
    precoOriginal: 10.999,
    desconto: 18,
    imagem:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
    descricao: "Notebook Apple ultrafino e potente",
    detalhes: "Leve, rápido e bateria de longa duração.",
  },
  {
    id: 3,
    nome: "AirPods Pro",
    categoria: "headphones",
    preco: 1.899,
    precoOriginal: 2.299,
    desconto: 17,
    imagem:
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400",
    descricao: "Fones sem fio com cancelamento de ruído",
    detalhes: "Som imersivo e conforto o dia todo.",
  },
  {
    id: 4,
    nome: "Samsung Galaxy S24",
    categoria: "smartphones",
    preco: 5.499,
    precoOriginal: 6.299,
    desconto: 13,
    imagem:
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400",
    descricao: "Smartphone Samsung com tela AMOLED",
    detalhes: "Tela AMOLED brilhante e desempenho veloz.",
  },
  {
    id: 5,
    nome: "Apple Watch Series 9",
    categoria: "smartwatch",
    preco: 3.299,
    precoOriginal: 3.799,
    desconto: 13,
    imagem:
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400",
    descricao: "Relógio inteligente com monitoramento",
    detalhes: "Saúde, notificações e estilo no pulso.",
  },
  {
    id: 6,
    nome: "Teclado Mecânico",
    categoria: "accessories",
    preco: 499,
    precoOriginal: null,
    desconto: null,
    imagem:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
    descricao: "Teclado mecânico RGB para gamers",
    detalhes: "Teclas rápidas, precisas e iluminadas.",
  },
  {
    id: 7,
    nome: "Sony WH-1000XM5",
    categoria: "headphones",
    preco: 2.499,
    precoOriginal: 2.999,
    desconto: 17,
    imagem:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400",
    descricao: "Fone com cancelamento de ruído",
    detalhes: "Áudio premium com cancelamento inteligente.",
  },
  {
    id: 8,
    nome: "Dell XPS 13",
    categoria: "laptops",
    preco: 7.999,
    precoOriginal: null,
    desconto: null,
    imagem:
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400",
    descricao: "Notebook Windows premium",
    detalhes: "Design compacto e performance poderosa.",
  },
  {
    id: 9,
    nome: "iPhone 16 Pro Max",
    categoria: "smartphones",
    preco: 7.999,
    precoOriginal: null,
    desconto: null,
    imagem:
      "https://images.unsplash.com/photo-1716882173326-04d822f142a8?q=80&w=400",
    descricao: "Câmeras de 48 MP e design em titânio resistente.",
    detalhes: "Potência máxima com tela gigante e 5G.",
  },
];

// Seleciona o container onde os produtos vão ser exibidos no HTML
let containerProdutos = document.querySelector(".produtos-container");
let inputPesquisa = document.querySelector(".input-pesquisa");
let textoInput = "";
let todosBotoes = document.querySelectorAll(".botao-categorias");
let todosLinks = document.querySelectorAll(".link-categoria");
// Categoria inicial pode vir da querystring (?cat=...)
let params = new URLSearchParams(window.location.search);
let categoria = params.get("cat") || "todos";
let queryInicial = params.get("q") || "";
if (inputPesquisa && queryInicial) {
  inputPesquisa.value = queryInicial;
  textoInput = queryInicial;
}

// Função que percorre a lista de produtos e monta o HTML
function mostrarProdutos() {
  let htmlProdutos = ""; // variável para armazenar o HTML que será gerado

  // Percorre cada produto no array
  produtos.forEach((listagemProdutos) => {
    if (listagemProdutos.nome.toLowerCase().includes(textoInput.toLowerCase()))
      if (listagemProdutos.categoria === categoria || categoria === "todos") {
        {
          htmlProdutos =
            htmlProdutos +
            `
    <div class="cartao-produto">
        <!-- Imagem do produto -->
        <img src="${listagemProdutos.imagem}" class="imagem-produto">
        
        <!-- Informações do produto -->
        <div class="info-produto">
            <h3 class="nome-produto">${listagemProdutos.nome}</h3>
            <p class="descricao-produto">${listagemProdutos.descricao}</p>
            <p class="preco-produto">R$ ${listagemProdutos.preco}</p>
            <button class="botao-produto" onclick="mostrarDetalhes(${listagemProdutos.id})">
  Ver detalhes
</button>

        </div>
    </div>
    `;
        }
      }
  });

  // Insere o HTML final dentro do container
  if (containerProdutos) {
    containerProdutos.innerHTML = htmlProdutos;
  }
}

// Ajusta o botão ativo conforme a categoria inicial
if (todosBotoes && todosBotoes.length) {
  todosBotoes.forEach((b) => b.classList.remove("ativo"));
  let ativo = Array.from(todosBotoes).find(
    (b) => b.getAttribute("data-categoria") === categoria
  );
  if (ativo) ativo.classList.add("ativo");
}

// Chama a função para exibir os produtos assim que a página carregar
mostrarProdutos();

// Função para exibir os produtos filtrados
function pesquisar() {
  textoInput = inputPesquisa.value;
  mostrarProdutos();
}
if (inputPesquisa && containerProdutos) inputPesquisa.addEventListener("input", pesquisar);

// Busca nas páginas internas: redireciona para a home com ?q=...
const isInterna = !containerProdutos; // páginas em /pages/ não possuem grid de produtos
function redirecionarBusca() {
  const base = location.pathname.includes("/pages/") ? "../index.html" : "index.html";
  const qs = new URLSearchParams();
  const q = (inputPesquisa?.value || "").trim();
  if (categoria && categoria !== "todos") qs.set("cat", categoria);
  if (q) qs.set("q", q);
  const sufixo = qs.toString();
  location.href = base + (sufixo ? "?" + sufixo : "");
}

if (isInterna && inputPesquisa) {
  inputPesquisa.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      redirecionarBusca();
    }
  });
  const iconeBusca = document.querySelector(".fa-magnifying-glass");
  if (iconeBusca) {
    iconeBusca.style.cursor = "pointer";
    iconeBusca.addEventListener("click", redirecionarBusca);
  }
}

// Função para exibir os produtos filtrados pelo botão.

todosBotoes.forEach((botao) => {
  botao.addEventListener("click", function () {
    categoria = botao.getAttribute("data-categoria");

    todosBotoes.forEach((botaoAtivo) => botaoAtivo.classList.remove("ativo"));

    botao.classList.add("ativo");

    mostrarProdutos();
  });
});

todosLinks.forEach((botao) => {
  botao.addEventListener("click", function () {
    categoria = botao.getAttribute("data-categoria");

    todosLinks.forEach((botaoAtivo) => botaoAtivo.classList.remove("ativo"));

    botao.classList.add("ativo");

    mostrarProdutos();
  });
});

// Função para abrir o modal
function mostrarDetalhes(id) {
  let produto = produtos.find((p) => p.id === id);

  if (produto) {
    document.getElementById("modal-titulo").innerText = produto.nome;
    document.getElementById("modal-imagem").src = produto.imagem;
    document.getElementById("modal-descricao").innerText = produto.detalhes;
    document.getElementById("modal").style.display = "flex";
  }
}

// Fechar o modal
const btnFecharX = document.querySelector(".fechar");
if (btnFecharX) btnFecharX.onclick = fecharModal;
const btnFechar = document.querySelector(".fechar-btn");
if (btnFechar) btnFechar.onclick = fecharModal;

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

// Fechar se clicar fora
window.onclick = function (event) {
  let modal = document.getElementById("modal");
  if (event.target === modal) {
    fecharModal();
  }
};

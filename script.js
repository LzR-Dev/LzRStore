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
  },
  {
    id: 6,
    nome: "Teclado Mecânico",
    categoria: "accessories",
    preco: 499,
    precoOriginal: null, // não tem preço original
    desconto: null, // não tem desconto
    imagem:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
    descricao: "Teclado mecânico RGB para gamers",
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
  },
  {
    id: 9,
    nome: "Iphone 16 Pro Max",
    categoria: "smartphones", // OBS: aqui também parece estar errado, deveria ser smartphone
    preco: 7.999,
    precoOriginal: null,
    desconto: null,
    imagem:
      "https://images.unsplash.com/photo-1716882173326-04d822f142a8?q=80&w=400",
    descricao: "Câmeras de 48 MP e design em titânio resistente.",
  },
];

// Seleciona o container onde os produtos vão ser exibidos no HTML
let containerProdutos = document.querySelector(".produtos-container");
let inputPesquisa = document.querySelector(".input-pesquisa");
let textoInput = "";
let todosBotoes = document.querySelectorAll(".botao-categorias");
let categoria = "todos";

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
            <button class="botao-produto">Ver detalhes</button>
        </div>
    </div>
    `;
        }
      }
  });

  // Insere o HTML final dentro do container
  containerProdutos.innerHTML = htmlProdutos;
}

// Chama a função para exibir os produtos assim que a página carregar
mostrarProdutos();

// Função para exibir os produtos filtrados
function pesquisar() {
  textoInput = inputPesquisa.value;
  mostrarProdutos();
}
inputPesquisa.addEventListener("input", pesquisar);

// Função para exibir os produtos filtrados pelo botão.

todosBotoes.forEach((botao) => {
  botao.addEventListener("click", function () {
    categoria = botao.getAttribute("data-categoria");

    todosBotoes.forEach((botaoAtivo) => botaoAtivo.classList.remove("ativo"));

    botao.classList.add("ativo");

    mostrarProdutos();
  });
});

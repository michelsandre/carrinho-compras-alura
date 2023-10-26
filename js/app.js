//Captura elementos HTML
let elemCarrinho = document.getElementById("lista-produtos");
let elemValorTotal = document.getElementById("valor-total");
let valorTotal = parseFloat(elemValorTotal.textContent.replace("R$", ""));

function adicionar() {
  let elemProduto = document.getElementById("produto").value.split(" - R$");
  let descricaoProduto = elemProduto[0];
  let preco = parseFloat(elemProduto[1]);

  let quantidade = parseInt(document.getElementById("quantidade").value);

  if (quantidade > 0) {
    elemCarrinho.innerHTML += `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${descricaoProduto} <span class="texto-azul">R$${preco}</span>
  </section>`;

    valorTotal += quantidade * preco;
    atualizaValorTotal();
  }
}

function limpar() {
  while (elemCarrinho.firstChild) {
    elemCarrinho.removeChild(elemCarrinho.firstChild);
    valorTotal = 0;
    atualizaValorTotal();
  }
}

function atualizaValorTotal() {
  elemValorTotal.textContent = `R$${valorTotal}`;
}

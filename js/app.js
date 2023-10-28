//Formata valores para 0.000,00
let formataValor = new Intl.NumberFormat(undefined, {
  minimumFractionDigits: 2,
});

//Captura elementos HTML
let elemCarrinho = document.getElementById("lista-produtos");
let elemValorTotal = document.getElementById("valor-total");
let valorTotal = 0;

calculaValorTotal(0);

function adicionar() {
  let elemProduto = document.getElementById("produto").value.split(" - R$");
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let descricaoProduto = elemProduto[0];
  let preco = parseFloat(elemProduto[1]);
  let subTotal = quantidade * preco;

  if (quantidade > 0) {
    elemCarrinho.innerHTML += `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${descricaoProduto} <span class="texto-azul">R$${formataValor.format(
      subTotal
    )}</span>
  </section>`;

    calculaValorTotal(subTotal);
    limpaQuantidade("quantidade");
  }
}

function limpar() {
  while (elemCarrinho.firstChild) {
    elemCarrinho.removeChild(elemCarrinho.firstChild);
  }
  valorTotal = 0;
  imprimeValorTotal();
  limpaQuantidade("quantidade");
}

function imprimeValorTotal() {
  // elemValorTotal.textContent = `R$${valorTotal.toLocaleString(undefined, {
  //   minimumFractionDigits: 2,
  // elemValorTotal.textContent = `R$${Intl.NumberFormat(undefined, {
  //   minimumFractionDigits: 2,
  // }).format(valorTotal)}`;
  elemValorTotal.textContent = `R$${formataValor.format(valorTotal)}`;
}

function calculaValorTotal(subTotal) {
  valorTotal += subTotal;
  imprimeValorTotal();
}

function limpaQuantidade(id) {
  let elem = document.getElementById(id);
  elem.value = "";
}

let precoFinal = 0;

function adicionar() {
    
    let produtoSelecionado = document.getElementById("produto").value;
    let quantidadeProduto = parseInt(document.getElementById("quantidade").value);
    let listaProdutos = document.getElementById("lista-produtos");
    let valorTotalProdutos = document.getElementById("valor-total");
    let listaVazia = document.getElementById("lista-vazia");

    if (isNaN(quantidadeProduto) || produtoSelecionado == "") {
        alert('Dados da compra não podem podem esta vazio.');
        return;
    }

    const [nome, preco] = extrairDadosProduto(produtoSelecionado);
    listaVazia.style.display = "none";

    precoFinal += (quantidadeProduto * preco);

    listaProdutos.innerHTML += componenteCompra(nome, preco, quantidadeProduto);
    valorTotalProdutos.innerText = `R$ ${precoFinal.toFixed(2)}`;

}

function limpar() {
    precoFinal = 0;

    let listaProdutos = document.getElementById("lista-produtos");
    let valorTotalProdutos = document.getElementById("valor-total");

    listaProdutos.innerHTML = `
            <section class='carrinho__produtos__produto' id='lista-vazia'>
                <span class='texto-azul' >Lista vazia!!</span>
            </section>`;
    valorTotalProdutos.innerText = `R$ ${precoFinal.toFixed(2)}`;
}

function componenteCompra(nome, preco, quantidade) {
    return `
        <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span>${nome} <span class="texto-azul">R$${(preco * quantidade).toFixed(2)}</span>
        </section>
    `
}

function extrairDadosProduto(str) {
    // Divide pelo hífen
    const partes = str.split(" - ");
    const nome = partes[0];
    // Remove "R$" e converte o preço para número
    const preco = Number(partes[1].replace("R$", "").trim());
    return [nome, preco];
}

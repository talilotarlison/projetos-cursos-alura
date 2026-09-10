let nomes = [];

function adicionar() {
    let nome = document.getElementById("nome-amigo");
    let listaDeAmigos = document.getElementById('lista-amigos');

    if (nomes.includes(nome.value)) {
        alert("Nome ja adicionado para sorteio!");

        return;
    }

    nomes.push(nome.value);
    nome.value = "";
    const nomesString = nomes.join(", ");

    listaDeAmigos.innerText = nomesString;
}

function sortear() {
    if (!(nomes.length % 2 == 0)) {
        alert("Quantidade pares, adicione mais participante!")
        return;
    }

    let listaDeAmigosSorteados = document.getElementById('lista-sorteio');
    for (let index = 0; index < nomes.length; index++) {
        listaDeAmigosSorteados.innerHTML += `${nomes[index]} x ${nomes[index + 1] ?? nomes[0]} <br>`;

    }
}

function reiniciar() {
    let listaDeAmigosSorteados = document.getElementById('lista-sorteio');
    let listaDeAmigos = document.getElementById('lista-amigos');
    let nome = document.getElementById("nome-amigo");
    // limpar campos
    listaDeAmigos.innerHTML = "";
    listaDeAmigosSorteados.innerHTML = "";
    nome.value = "";
    nomes = [];
}
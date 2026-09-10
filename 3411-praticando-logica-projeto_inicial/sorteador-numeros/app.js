function sortearNumero(qntNumero, de, ate) {
    let numerosSorteados = [];

    while (numerosSorteados.length < qntNumero) {
        let numero = Math.floor(Math.random() * (ate - de + 1)) + de;

        if (!numerosSorteados.includes(numero)) {
            numerosSorteados.push(numero);
        }

        // Se o intervalo for menor que a qnt solicitada, evitar loop infinito
        if (ate - de + 1 < qntNumero) {
            console.error("Intervalo insuficiente para a quantidade solicitada!");
            alert("Intervalo insuficiente para a quantidade solicitada!, tente novamente!");
            break;
        }
    }

    return numerosSorteados;
}

function sortear() {
    let quantidadeNumeros = parseInt(document.getElementById("quantidade").value);
    let deNumeros = parseInt(document.getElementById("de").value);
    let ateNumeros = parseInt(document.getElementById("ate").value); // garente a entrada seja numero

    if (isNaN(quantidadeNumeros) || isNaN(deNumeros) || isNaN(ateNumeros)) {
        alert("Campos não podem ser vazios.");
        return;
    }

    let numeroSorteado = sortearNumero(quantidadeNumeros, deNumeros, ateNumeros);
    exibirNumerosTela(numeroSorteado);

}

function exibirNumerosTela(numeroSorteado) {
    let tela = document.getElementById("label_resultado");
    let btnSortear = document.getElementById("btn-sortear");
    let btnReiniciar = document.getElementById("btn-reiniciar");

    tela.innerHTML = componenteNumerosSorteado(numeroSorteado);

    btnSortear.setAttribute('disabled', 'disabled');
    btnReiniciar.classList.remove('container__botao-desabilitado');
    btnReiniciar.classList.add('container__botao');
}

function componenteNumerosSorteado(numeroSorteado = []) {
    return `<label class="texto__paragrafo">Números sorteados:  ${numeroSorteado.length == 0 ? 'Nenhum até agora' : numeroSorteado}</label>`;
}

function reiniciar() {
    let tela = document.getElementById("resultado");
    let btnSortear = document.getElementById("btn-sortear");
    let btnReiniciar = document.getElementById("btn-reiniciar");
    // limpar informações da tela
    tela.innerHTML = componenteNumerosSorteado();
    // habilitar e desabilita botoes
    btnSortear.removeAttribute('disabled');
    btnReiniciar.classList.add('container__botao-desabilitado');
    btnReiniciar.classList.remove('container__botao');
    // limpar dados formulario
    document.getElementById("quantidade").value = '';
    document.getElementById("de").value = "";
    document.getElementById("ate").value = ''; // garente a entrada seja numero
}

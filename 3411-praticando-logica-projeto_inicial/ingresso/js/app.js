let ingressosDisponiveis = {
    'pista': 100,
    'superior': 200,
    'inferior': 400
}

function mostrarTela() {
    let display = {
        'qtdPista': document.getElementById("qtd-pista"),
        'qtdSuperior': document.getElementById("qtd-superior"),
        'qtdInferior': document.getElementById("qtd-inferior")
    }
    // mostrar tela

    display.qtdPista.innerText = ingressosDisponiveis.pista;
    display.qtdSuperior.innerText = ingressosDisponiveis.superior;
    display.qtdInferior.innerText = ingressosDisponiveis.inferior;

}

function comprar() {
    // get dados usuario
    let tipoIngresso = document.getElementById("tipo-ingresso").value;
    let qtdIngresso = document.getElementById("qtd").value;

    console.log(tipoIngresso, qtdIngresso);
    let calculoIngresso = ingressosDisponiveis[tipoIngresso] - qtdIngresso;
    if (calculoIngresso < 0) {
        alert("Quantida indisponivel para compara.");
        return;
    }

    ingressosDisponiveis[tipoIngresso] = calculoIngresso;
    mostrarTela()
}

window.onload = mostrarTela();
// Por isso, hoje, eu vou te ensinar a desenvolver um programa simulando um desses sites. Ele deve pedir para o usuário responder 3 perguntas:

// - Qual o seu nome?
// - Quantos anos você tem?
// - Qual linguagem de programação você está estudando?

// À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.

// No final, o sistema vai exibir a mensagem:

// "Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"

// Note que cada informação entre [ ] é uma das respostas dadas pela pessoa.

// https://www.w3schools.com/js/js_popup.asp

const tipoDado = {
    nome: "Nome",
    idade: "Idade",
    linguagem: "Linguaguem"
}

function validarDados(dado, tipo, getNome) {
    if (dado == null || dado == "") {
        alert(`${tipo} não pode ser vazio!`);
        getNome();
    } else {
        return dado;
    }
}

function getNome() {
    let nome = window.prompt("Qual o seu nome?");
    let nomeValidado = validarDados(nome, tipoDado.nome, getNome);
    return nomeValidado
}

function getIdade() {
    let idade = window.prompt("Quantos anos você tem?");
    let idadeValidada = validarDados(idade, tipoDado.idade, getIdade);
    return idadeValidada;
}

function getLingFavorita() {
    let lingFavorita = window.prompt("Qual linguagem de programação você está estudando?");
    let lingFavoritaValidada = validarDados(lingFavorita, tipoDado.linguagem, getLingFavorita);
    return lingFavoritaValidada;
}

function apresentacao(nome, idade, lingFavorita) {
    // mostra na tela resultado
    alert(`Olá ${nome}, você tem  ${idade} anos e já está aprendendo ${lingFavorita}!`);
}

function main() {
    let nome = getNome();
    let idade = getIdade();
    let lingFavorita = getLingFavorita();
    apresentacao(nome, idade, lingFavorita);
}

main();
const lingFavorita = prompt("Qual sua linguem de programação favorita?");
const resposta = prompt(`Você gosta de estudar ${lingFavorita} ? Responda com o número 1 para SIM ou 2 para NÃO.`);

if (resposta == 1) {
    // dê a resposta positiva
    alert("1 > Muito bom! Continue estudando e você terá muito sucesso.")
}
if (resposta == 2) {
    // dê a resposta negativa
    alert("2 > Ahh que pena... Já tentou aprender outras linguagens?")
}



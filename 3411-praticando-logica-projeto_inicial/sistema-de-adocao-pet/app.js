

// Suponha que você esteja trabalhando em um sistema de adoção de pets, na funcionalidade que calcula a probabilidade de adoção de um determinado pet.

// As seguintes regras devem ser seguidas nessa funcionalidade:

// A probabilidade deve ser calculada baseada em uma nota de 0 a 10;
// Se a nota for maior do que 7, a probabilidade deve ser alta;
// Se a nota for entre 5 e 7, a probabilidade deve ser média;
// Se a nota for menor do que 5, a probabilidade deve ser baixa.
// Todo pet deve iniciar com nota 10, devendo essa nota ser penalizada de acordo com o peso e a idade do pet, baseado nos seguintes critérios:

// Se o pet tiver mais do que 10kg de peso, a nota deve ser penalizada em 2 pontos. Caso o peso seja maior do que 20kg, a penalização deve ser de 4 pontos;
// Se o pet tiver 8 anos ou mais de idade, a nota deve ser penalizada em 2 pontos. Caso a idade seja igual ou maior do que 14 anos, a penalização deve ser de 4 pontos.
// Você escreveu o seguinte código para implementar essa funcionalidade:

function calcularProbabilidadeAdocao(peso, idade) {
    let nota = 10;

    if (peso > 20) {
        nota = nota - 4;
    } else if (peso > 10) {
        nota = nota - 2;
    }

    if (idade >= 14) {
        nota = nota - 4;
    } else if (idade >= 8) {
        nota = nota - 2;
    }

    return nota;
}

function mostrarResultado(){
    let peso = parseInt(document.getElementById('peso').value);
    let idade = parseInt(document.getElementById('idade').value);
    let mostrarResultado = document.getElementById('resultado')
   
    let probabilidade = calcularProbabilidadeAdocao(peso, idade);
    mostrarResultado.textContent = `A probabilidade de adoção é ${probabilidade}%.`;
}
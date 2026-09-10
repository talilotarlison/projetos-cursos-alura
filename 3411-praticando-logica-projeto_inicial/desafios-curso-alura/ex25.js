// exemplo 1

function sortearNumero(de, ate) {
    let numero = Math.floor(Math.random() * ate) + 1;

    if (numero >= de && numero <= ate) {
        return numero;
    } else {
        return sortearNumero(de, ate); // <-- return aqui é obrigatório
    }
}

console.log(sortearNumero(20, 50));

// exemplo 2

function sortearNumero(de, ate) {
    let numeroSorteado = Math.floor(Math.random() * (ate - de + 1)) + de;
    return numeroSorteado;
}

console.log(sortearNumero(20, 50));


// exemplo 3

function sortearNumero(qntNumero, de, ate) {
    let numerosSorteados = [];

    while (numerosSorteados.length < qntNumero) {
        let numero = Math.floor(Math.random() * (ate - de + 1)) + de;

        if (!numerosSorteados.includes(numero)) {
            numerosSorteados.push(numero);
        }
    }

    return numerosSorteados;
}

// Exemplo:
console.log(sortearNumero(5, 1, 100));
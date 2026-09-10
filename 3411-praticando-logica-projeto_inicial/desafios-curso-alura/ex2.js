// http://cangaceirojavascript.com.br/como-embaralhar-arrays-algoritmo-fisher-yates/

const vogais = ['a', 'e', 'i', 'o', 'u'];

function embaralha(lista) {

    let indice = lista.length
    
    while(indice) {
        // atenção para o pós-incremento indice-- 
        const indiceAleatorio = Math.floor(Math.random() * indice--);
        [lista[indice], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice]];
    }
}

embaralha(vogais);
console.log(vogais);
// Desafio 1:Adicionar Opção de Excluir Amigos da Lista
// desafios alura
let amigos = [];


function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');


    amigos.push(amigo.value);


    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }


    amigo.value = '';


    atualizarLista();
    atualizarSorteio();
}


function sortear() {
    embaralhar(amigos);


    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
        }
    }
}


function excluirAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}


function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}


function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}


function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';


    for (let i = 0; i < amigos.length; i++) {
        // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];
       
        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });


        // Adiciona o parágrafo à lista
        lista.appendChild(paragrafo);
    }
}


function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}


// Essa modificação cria elementos de parágrafo <p> para cada amigo na lista. Em seguida, adiciona um ouvinte de evento de clique a cada parágrafo, que chama a função excluirAmigo com o índice correspondente.

// Desafio 2: Manipulando Arrays

// Declarando uma variável do tipo array
let minhaLista = [];

// Adicionando elementos com push
minhaLista.push(1, 2, 3);
console.log("Adicionando elementos:", minhaLista);

// Criando uma nova variável
let outrosNumeros = [4, 5, 6];

// Concatenando arrays
let novaLista = minhaLista.concat(outrosNumeros);
console.log("Juntando Arrays:", novaLista);

// Desafio 3: Removendo elementos com pop

// Removendo o último elemento
novaLista.pop();
console.log("Desafio 4:", novaLista);

// Desafio 4:Embaralhando elementos em um array Incremente com as informações a partir do Desafio 2


function embaralharArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Embaralhando novaLista
novaLista = embaralharArray(novaLista);
console.log("Embaralhando a Lista:", novaLista);

// O algoritmo de Fisher-Yates, também conhecido como o algoritmo de embaralhamento de Knuth ou o algoritmo de shuffle de Durstenfeld, é um algoritmo para gerar uma permutação aleatória de um conjunto finito. Ele foi projetado para embaralhar um array ou lista de forma eficiente e uniformemente aleatória.

// O algoritmo opera trocando elementos dentro do array. A ideia básica é percorrer o array da direita para a esquerda e, para cada elemento, trocá-lo aleatoriamente com um elemento anterior a ele (incluindo ele mesmo). Esse processo é repetido até que todo o array esteja embaralhado.

// Leia mais sobre o Algoritmo em Como embaralhar arrays com o algoritmo Fisher–Yates

// Desafio 5: Removendo duplicatas


// Função para remover duplicatas de um array
function removerDuplicatas(array) {
  return [...new Set(array)];
}

// Testando a função com novaLista
let novaListaSemDuplicatas = removerDuplicatas(novaLista);
console.log("Remover duplicatas:", novaListaSemDuplicatas);
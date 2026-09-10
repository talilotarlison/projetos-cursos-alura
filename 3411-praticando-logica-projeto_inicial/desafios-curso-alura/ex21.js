// Desafio 3: Função que verifica se uma palavra é um palíndromo

// Confira a resolução no Alura+: Funções no JavaScript que você precisa conhecer

function ehPalindromo(palavra) {
  const limpa = palavra.toLowerCase().replace(/\s+/g, '');
  return limpa === limpa.split('').reverse().join('');
}


// Aqui está somente a função , retornando É palíndromo ou Não é palíndromo:

function ehPalindromo(palavra) {
  const limpa = palavra.toLowerCase().replace(/\s+/g, '');
  return limpa === limpa.split('').reverse().join('') 
    ? "É palíndromo"
    : "Não é palíndromo";
}


ehPalindromo("ovo");
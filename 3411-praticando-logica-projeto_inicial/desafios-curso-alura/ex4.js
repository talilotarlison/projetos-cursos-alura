// Neste Alura+, o instrutor Luan Alves ensina as especificidades das funções: function declaration e function expression no JavaScript, realizando um desafio de checagem de palavras palíndromas.

// Caso queira saber mais sobre o comportamento de Hoisting na linguagem JavaScript, leia o artigo de Hoisting no JavaScript, de minha autoria, em parceria com a instrutora Mônica Hillman. Onde abordamos exemplos do comportamento de Hoisting utilizando var, let e const.

// Quer mergulhar em desenvolvimento front-end? Venha comigo estudar a Formação Front-End disponibilizada na plataforma Alura!

// https://www.alura.com.br/artigos/hoisting-no-javascript

// exemplo 1
ehPalindromo("ovo")

function ehPalindromo(palavra) {
  const limpa = palavra.toLowerCase().replace(/\s+/g, '');
  const palavraInvertida = limpa.split('').reverse().join('');

  if(palavra == palavraInvertida){
    console.log("É palíndromo")
  }else{
    console.log("Não é palíndromo");
  }
}

// exemplo 2 com array function - erro precisa ser Cannot access 'ehPalindromo' before initialization

ehPalindromo("ovo")

const ehPalindromo = (palavra)=> {
  const limpa = palavra.toLowerCase().replace(/\s+/g, '');
  const palavraInvertida = limpa.split('').reverse().join('');

  if(palavra == palavraInvertida){
    console.log("É palíndromo")
  }else{
    console.log("Não é palíndromo");
  }
}

// exemplo 3 com function expression - erro precisa ser Cannot access 'ehPalindromo' before initialization

ehPalindromo("ovo")

const ehPalindromo = function (palavra) {
  const limpa = palavra.toLowerCase().replace(/\s+/g, '');
  const palavraInvertida = limpa.split('').reverse().join('');

  if(palavra == palavraInvertida){
    console.log("É palíndromo")
  }else{
    console.log("Não é palíndromo");
  }
}

// Function expression = um jeito de definir uma função usando uma expressão.

// Função anônima = uma função sem nome.

// Elas não são a mesma coisa, mas aparecem juntas com frequência.
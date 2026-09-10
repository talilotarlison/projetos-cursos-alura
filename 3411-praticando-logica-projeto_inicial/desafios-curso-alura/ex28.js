// Usando charAt()
// Este método retorna o caractere na posição especificada. 
// Sintaxe: string.charAt(indice)
// Exemplo 1:

let minhaString = "Exemplo";
let primeiroCaractere = minhaString.charAt(0); // Retorna "E"
let terceiroCaractere = minhaString.charAt(2); // Retorna "e"
let caractereFora = minhaString.charAt(10); // Retorna "" (string vazia)

// Usando Notação de Colchetes
// Esta é uma forma mais concisa e moderna de acessar caracteres por índice. 
// Sintaxe: string[indice]
// Exemplo 2:

let minhaString2 = "Exemplo";
let primeiroCaractere2 = minhaString2[0]; // Retorna "E"
let terceiroCaractere2 = minhaString2[2]; // Retorna "e"
let caractereFora2 = minhaString2[10]; // Retorna undefined

// Exemplo 3:

let nomeCompleto = "Joao Cardoso Silva";
let nomes = nomeCompleto.split(" ");

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

let letrasIniciais = "";
nomes.forEach((nome) => {
  letrasIniciais += nome.charAt(0);
} );
console.log(letrasIniciais)
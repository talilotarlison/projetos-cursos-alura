// Para "verificar se é" em JavaScript, use o operador typeof para checar o tipo de uma variável (ex: typeof minhaVariavel === 'string'), o método includes() ou indexOf() para verificar se uma string contém outra (ex: minhaString.includes('termo')), a função isNaN() para checar se algo é um número (ex: isNaN(valor)), e o construtor Date() para validar datas (ex: !isNaN(new Date(dataString).getTime())). 

// 1. Verificar o tipo de uma variável 
// Use o operador typeof para determinar se uma variável é de um tipo específico, como string, número, objeto, etc. 


let nome = "João";
if (typeof nome === "string") {
    console.log("É uma string!"); // Exibe "É uma string!"
}

// 2. Verificar se uma string contém outra
// Use o método includes() para ver se uma string contém um trecho de texto. 


let texto = "Olá, mundo!";
if (texto.includes("mundo")) {
    console.log("A string contém 'mundo'."); // Exibe "A string contém 'mundo'."
}

// 3. Verificar se um valor é um número
// Use a função isNaN() para saber se um valor é "Not a Number". 


let valor = 123;
if (!isNaN(valor)) {
    console.log("É um número válido."); // Exibe "É um número válido."
}

let outroValor = "abc";
if (isNaN(outroValor)) {
    console.log("Não é um número válido."); // Exibe "Não é um número válido."
}

// 4. Verificar se é uma data válida
// Tente criar um objeto Date a partir da string.Use o método getTime() e verifique se o resultado não é NaN.


function validarData(dataString) {
    const data = new Date(dataString);
    // Se o resultado do getTime() não for NaN, a data é válida
    return !isNaN(data.getTime());
}

console.log(validarData("2023-10-27")); // true
console.log(validarData("data inválida")); // false



// Exemplo de  typof -> https://pt.stackoverflow.com/questions/19273/como-verificar-se-uma-vari%C3%A1vel-est%C3%A1-definida

typeof vCogUG === "undefined"


if (typeof vCogUG === "undefined") {
    alert("vCogUG é undefined");  // Será mostrado
} else {
    alert("O valor de vCogUG é " + vCogUG); // Não será mostrado
}

var vCogUG = 3;

if (typeof vCogUG === "undefined") {
    alert("vCogUG é undefined"); // Não será mostrado
} else {
    alert("O valor de vCogUG é " + vCogUG); // Será mostrado
} typeof vCogUG === "undefined"
Exemplo:

if (typeof vCogUG === "undefined") {
    alert("vCogUG é undefined");  // Será mostrado
} else {
    alert("O valor de vCogUG é " + vCogUG); // Não será mostrado
}

var vCogUG = 3;

if (typeof vCogUG === "undefined") {
    alert("vCogUG é undefined"); // Não será mostrado
} else {
    alert("O valor de vCogUG é " + vCogUG); // Será mostrado
}
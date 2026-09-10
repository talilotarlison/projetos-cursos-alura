const nomes = ["Alice", "Bob", "Carol", "David"];

// Transformando o array em uma string separada por vírgulas
const nomesString = nomes.join(","); 

console.log(nomesString); 
// Saída: "Alice,Bob,Carol,David"


const nomesStringComEspaco = nomes.join(", "); 
console.log(nomesStringComEspaco); 
// Saída: "Alice, Bob, Carol, David"

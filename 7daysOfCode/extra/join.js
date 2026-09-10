
// Metodo join e javascript
const frutas = ["maçã", "banana", "laranja"];
const stringDeFrutas = frutas.join(", "); // Saída: "maçã, banana, laranja"
console.log(stringDeFrutas);

const numeros = [1, 2, 3, 4, 5];
const stringDeNumeros = numeros.join("-"); // Saída: "1-2-3-4-5"
console.log(stringDeNumeros);

const arrayVazio = [];
const stringVazia = arrayVazio.join(); // Saída: "" (string vazia)
console.log(stringVazia);


// Método join()
// O método join() é a maneira mais versátil para unir os elementos de um array numa string com um delimitador específico. Exemplo. 


const meuArray = ["Maçã", "Banana", "Laranja"];
const stringUnida = meuArray.join(", "); // "Maçã, Banana, Laranja"
// Neste exemplo, ", " é o separador que será inserido entre cada elemento do array. 
// Remover a vírgula (ou qualquer separador padrão)
// Para unir os elementos sem nenhum separador (ou seja, removendo a vírgula que join() adicionaria por padrão, como ocorre com toString()), passe uma string vazia '' como argumento. Exemplo. 


const meuArray1 = ["Um", "Dois", "Três"];
const stringSemVirgula = meuArray.join(''); // "UmDoisTrês"

// Método toString().
// O método toString() também une os elementos de um array numa string, mas sempre usando uma vírgula como separador.Exemplo.


const meuArray2 = ["Pedro", "Paulo", "Thiago"];
const stringComVirgula1 = meuArray.toString(); // "Pedro,Paulo,Thiago"
// Para remover a vírgula de toString(): Você deve primeiro executar o toString() e depois usar o método replace() para remover as vírgulas.


const meuArray3 = ["Pedro", "Paulo", "Thiago"];
const stringComVirgula = meuArray.toString();
const stringSemVirgula2 = stringComVirgula.replace(/,/g, ''); // "PedroPauloThiago"
// O replace(/,/g, '') utiliza uma expressão regular para encontrar todas as ocorrências da vírgula(/ /g) e substituí - las por uma string vazia. 

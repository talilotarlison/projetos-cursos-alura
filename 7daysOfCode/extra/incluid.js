// metodo incluid

const frase = "Olá, mundo!";
console.log(frase.includes("mundo")); // Output: true
console.log(frase.includes("JavaScript")); // Output: false


const numeros1 = [10, 20, 30, 40];
console.log(numeros1.includes(20)); // Output: true
console.log(numeros1.includes(50)); // Output: false

//The splice() method modifies the original array in place and can also return the removed elements as a new array.

// Define an array
const myArray = ['apple', 'banana', 'orange', 'grape'];

// The index of the item to remove
const indexToRemove = 2; // This corresponds to 'orange'

// Use splice() to remove the item
// The first argument is the starting index
// The second argument is the number of elements to remove
const removedItems = myArray.splice(indexToRemove, 1);

console.log(myArray);       // Output: ['apple', 'banana', 'grape']
console.log(removedItems);  // Output: ['orange']

// A função de callback recebe três argumentos opcionais: 
// elemento: O elemento atual do array que está sendo processado.
// índice: O índice (posição) do elemento atual no array.
// array: O array original que está sendo percorrido.

const numeros = [5, 12, 8, 130, 44];

// Encontra o primeiro número maior que 10
const maiorQueDez = numeros.find(function(numero) {
  return numero > 10;
});

console.log(maiorQueDez); // Output: 12

// Encontra o primeiro número que não existe
const numeroInexistente = numeros.find(function(numero) {
  return numero === 100;
});

console.log(numeroInexistente); // Output: undefined
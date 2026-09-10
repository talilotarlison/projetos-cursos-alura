function verificarValor(valor) {
// O operador "||" é usado para fazer um curto circuito
return valor || 'Valor padrão';
}

console.log(verificarValor(null)); // Saída: 'Valor padrão'
console.log(verificarValor(5)); // Saída: 5
console.log(verificarValor('')); // Saída: 'Valor padrão'
console.log(verificarValor('Texto')); // Saída: 'Texto'
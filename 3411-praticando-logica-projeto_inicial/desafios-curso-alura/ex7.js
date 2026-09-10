
// 1. Function Expression (expressão de função)

// É a forma como uma função é criada: usando uma expressão.
// Exemplo de *function expression*:


const soma1 = function (a, b) {
  return a + b;
};


// Aqui, temos uma expressão que produz uma função e a atribui a uma variável.

// Ela pode ser anônima ou nomeada.
// Exemplo de function expression **nomeada**:


const soma2 = function calcular(a, b) {
  return a + b;
};


// 2. Função Anônima

// É uma função sem nome:

const apresentacao = function (nome) {
    console.log(nome);
 }

// Ela pode aparecer em vários contextos, não só em *function expressions* — por exemplo, em callbacks:


setTimeout(function () {
  console.log("oi");
}, 1000);


// Como se relacionam?

// Toda função anônima pode ser usada dentro de uma function expression, mas
// nem toda function expression é anônima (ela pode ter nome).


// * *Function expression* = **um jeito de definir uma função** usando uma expressão.
// * *Função anônima* = **uma função sem nome**.
// * Elas **não são a mesma coisa**, mas aparecem juntas com frequência.


let soma = (...nums)=>{
  nums.forEach(num=> console.log(num))
 
}

soma(1,2,3,4,6)



//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators

var partes = ["ombro", "joelhos"];
var musica = ["cabeca", ...partes, "e", "pés"];
console.log(musica);
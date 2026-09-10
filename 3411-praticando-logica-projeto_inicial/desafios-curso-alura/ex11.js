// https://pt.stackoverflow.com/questions/3021/como-posso-checar-se-uma-string-cont%C3%A9m-outra-em-javascript

let string = 'Meu texto aqui';
let result = string.includes('textos');

console.log(result);
if(result){
  console.log("contem");
}else{
   console.log("nao contem");
}



let string1 = 'Tamanho 12,12cm';
let array = string1.split(' ');

let filtro = array.filter(valor => valor.includes(','))

console.log(filtro);    // em forma de array
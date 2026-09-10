var diasSemana = [1,2,3,4,5,6,7];

var diasSemanaDecrencente = diasSemana.reverse();

var [ domingo ,sabado, ...meioSemana] = diasSemanaDecrencente;

console.log(sabado, domingo)
let entrada = 3;

if(diasSemana.includes(entrada)){
  
  console.log('É um dia da semena valido');
  
  if(entrada == sabado || entrada == domingo){
  
  console.log("Bom fim de semana");
    
  }else{
    
  console.log("Boa semana"); 
  
  }
}else{
  console.log('É um dia da semena não valido');
}


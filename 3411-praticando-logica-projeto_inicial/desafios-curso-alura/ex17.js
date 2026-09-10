
// funcao menu ===========================================
function menu(){
   console.log("===========CALCULADORA DE JUROS ==========="); 
   console.log("Escolha uma das opções abaixo: ");
   console.log("1. Para juros simples ao Mes.");
   console.log("2. Para juros simples ao Ano.");
   console.log("3. Para juros composto ao Ano.");
   var opcaoEscolhida = 1;
   var usuario = entradaDados(1000,20,10);
   mostraTela(opcaoEscolhida, usuario);
}


//entradas de dados usuario ===============================
var entradaDados = (capital,taxaJuros,tempo)=>{
   var dados = { valorCapitalInicial : capital,
                 taxaJurosAplicada: taxaJuros/100,
                 tempoAplicacao: tempo
  }
  return dados;
}


function mostraTela(opcaoEscolhida, usuario){
    switch (opcaoEscolhida) {
    case 1:
      jurosSimplesMes(usuario.valorCapitalInicial,usuario.taxaJurosAplicada,usuario.tempoAplicacao );
      break;
    case 2:
       jurosSimplesAno(usuario.valorCapitalInicial,usuario.taxaJurosAplicada,usuario.tempoAplicacao );
      break;
    case 3:
       jurosCompostoMes(usuario.valorCapitalInicial,usuario.taxaJurosAplicada,usuario.tempoAplicacao );
      break;
    default:
      console.log("Desculpe, ess opção não e valida!!");
      console.log("Fim do programa!!");
  }
    
}

// declaração das funcoes de juros =======================================

function jurosSimplesMes(capital, taxaJuros,tempo){
  console.log("==========================================="); 
  var juros = capital * taxaJuros* tempo
  console.log(`Seu capital inicial é R$ ${capital}.\nOs juros no periodo de ${tempo} meses.\nOs juros é R$ ${juros}.\nO montante é R$ ${capital+juros}.`)
  console.log("Fim do programa!!");
}

function jurosSimplesAno(capital, taxaJuros,tempo){
  console.log("=========================================="); 
  var montante = capital * (1+(taxaJuros* tempo/360))
  console.log(`Seu capital inicial é R$ ${capital}.\nOs juros no periodo de ${tempo} dias.\nO montante é R$ ${montante.toFixed(2)}.`)
  console.log("Fim do programa!!");
}

function jurosCompostoMes(capital, taxaJuros,tempo){
  console.log("=========================================="); 
  var montante = capital * (1+ taxaJuros)**tempo
  console.log(`Seu capital inicial é R$ ${capital}.\nOs juros no periodo de ${tempo} meses.\nO montante é R$ ${montante.toFixed(2)}.`)
  console.log("Fim do programa!!");
}


// chamada da funcao menu
menu();
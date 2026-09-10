const operador = {
     soma: "somar",
     subtracao: "subtrair",
     multiplicacao: "multiplicar",
     divisao: "dividir"
}

// pegar dados de entrada usuario
function getDados(operacao) {
     let numero1 = prompt(`Digite o primeiro numero para ${operacao}.`);
     let numero2 = prompt(`Digite o segundo numero para ${operacao}.`);
     return {
          numero1,
          numero2
     }
}

//somar
function somarNumeros() {
     let numeros = getDados(operador.soma);
     const { numero1, numero2 } = numeros;
     let soma = parseFloat(numero1) + parseFloat(numero2);
     alert(`Soma: ${soma}`);
}

// subrtrair 
function subtrairNumeros() {
     let numeros = getDados(operador.subtracao);
     const { numero1, numero2 } = numeros;
     let subrtrair = parseFloat(numero1) - parseFloat(numero2);
     alert(`Subtração: ${subrtrair}`);
}

// multiplicar
function multiplicarNumeros() {
     let numeros = getDados(operador.multiplicacao);
     const { numero1, numero2 } = numeros;
     let multiplicar = parseFloat(numero1) * parseFloat(numero2);
     alert(`Multiplicação: ${multiplicar}`);
}

// dividir
function dividirNumeros() {
     let numeros = getDados(operador.divisao);
     const { numero1, numero2 } = numeros;
     let dividir = parseFloat(numero1) / parseFloat(numero2);
     alert(`Divisão: ${dividir}`);
}

// menu de opções
function menuOpcoes(opcao) {
     if (opcao.toLocaleLowerCase() == "a") {
          // somar
          somarNumeros();
          menu();
     } else if (opcao.toLocaleLowerCase() == "s") {
          // diminuir
          subtrairNumeros();
          menu();
     } else if (opcao.toLocaleLowerCase() == "m") {
          //  multiplicar
          multiplicarNumeros();
          menu();
     } else if (opcao.toLocaleLowerCase() == "d") {
          //  dividir
          dividirNumeros();
          menu();
     } else if (opcao.toLocaleLowerCase() == "e") {
          // sair do programa
          sair();
     } else {
          // entrada invalida
          alert("Entrada invalida!")
          menu();
     }
}

// menu programa
function menu() {
     let opt = prompt(" [A] Adição \n [S] Subtração \n [M] Multiplicação \n [D] Divisao  \n [E] Sair");
     menuOpcoes(opt);
}

// menu iniciar
menu();


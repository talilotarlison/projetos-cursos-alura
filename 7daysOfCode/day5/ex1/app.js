// array de compras
let listaCompras = [];

function comprarProduto() {
     let nomecliente = prompt("Nome do Cliente?");
     let addComida = prompt("Adicone uma comida?");
     let addCategoria = prompt("Adicone categoria da comida?");
     let addValorProduto = prompt("Adicone valor da compra R$?");

     let compraUsuario = {
          cliente: nomecliente,
          comida: addComida,
          categoria: addCategoria,
          preco: parseFloat(addValorProduto)
     }

     alert(`Cliente: ${compraUsuario.cliente} - Valor Total da compra: R$ ${compraUsuario.preco}`);
     listaCompras.push(compraUsuario);
     alert('Venda adcionada com sucesso!!');
}

function listarProdutos() {
     if (listaCompras.length == 0) {
          alert("Lista vazia!!")
          menu();
     } else {
          let listaTotalCompras = [];
          listaCompras.forEach((compraUser, index) => {
              listaTotalCompras.push(`[ Id: ${index} ] - Nome: ${compraUser.cliente} - Comida: ${compraUser.comida} - Categoria: ${compraUser.categoria} - Preco: ${compraUser.preco} \n`);
          });

          let listaProdutosFinal = listaTotalCompras.join(", ").replace(/,/g, '');
          alert(listaProdutosFinal);
          menu();
     }
}

// sair programa
function sair() {
     let sair = confirm("Deseja sair?")
     if (!sair) {
          menu();
     }

}

function menuOpcoes(opcao) {
     if (opcao.toLocaleLowerCase() == "c") {
          // comprar
          comprarProduto();
          menu();
     } else if (opcao.toLocaleLowerCase() == "v") {
          // listar produtoss
          listarProdutos();
     } else if (opcao.toLocaleLowerCase() == "s") {
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
     let opt = prompt(" [C] Deseja comprar algo? \n [V] Ver lista de compras \n [S] Sair");
     menuOpcoes(opt);
}

// menu iniciar
menu();


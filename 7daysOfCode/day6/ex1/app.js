// array de compras
let listaCompras = [];

// comprar produto
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

// listar todos produtos
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

// remove produto
function removerCompra() {
     let idVenda = prompt("Qual id da venda deseja excluir?");
     let buscaNaoEncontrada = 0;
     listaCompras.map((venda, index) => {
          if (index == parseInt(idVenda)) {
               alert(`Nome: ${venda.cliente} - Comida: ${venda.comida} - Categoria: ${venda.categoria} - Preco: ${venda.preco} \n Venda ${index} removida com sucesso!`);
               listaCompras.splice(idVenda, 1);
          } else {
               buscaNaoEncontrada++;
          }
     })

     if (buscaNaoEncontrada !== 0) {
          alert(`Venda de Id: ${idVenda}, não existe no sistema.`);
     }
}

// sair programa
function sair() {
     let sair = confirm("Deseja sair?");
     if (!sair) {
          menu();
     }

}

// menu de opções
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
     } else if (opcao.toLocaleLowerCase() == "r") {
          // remover a comprar
          removerCompra();
          menu();
     } else {
          // entrada invalida
          alert("Entrada invalida!")
          menu();
     }
}

// menu programa
function menu() {
     let opt = prompt(" [C] Deseja comprar algo? \n [V] Ver lista de compras \n [R] Remover compra \n [S] Sair");
     menuOpcoes(opt);
}

// menu iniciar
menu();


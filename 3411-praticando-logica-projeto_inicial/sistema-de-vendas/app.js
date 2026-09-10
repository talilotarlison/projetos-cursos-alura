// Suponha que você esteja trabalhando em um sistema de vendas, no qual o usuário informa o total de itens e o valor unitário. Com base em algumas regras, o sistema aplica um desconto (não cumulativo) de 5% sobre o valor total.

// As regras são as seguintes:

// Inclusão de 10 ou mais itens; e/ou
// Valor unitário igual ou superior a R$ 100,00.
// O valor deverá ser exibido num alert e depois a função reiniciar() deverá ser chamada.

// Os seguintes códigos foram escritos para implementar essa funcionalidade e a funcionalidade de reiniciar os valores:

function calcular() {

    let quantidade = parseInt(document.getElementById('quantidade').value);
    let valor = parseFloat(document.getElementById('valor').value);

    let total = quantidade * valor;

    if(isNaN(quantidade)||isNaN(valor)){
        alert("Campos não podem ser vazios!!");
        return;
    }

    if (quantidade >= 10 || valor >= 100) {
        total = total - (total / 100 * 5);
    }

    alert(`Valor total: ${total} `);
    reiniciar();
}


function reiniciar() {
    quantidade.value = '';
    valor.value = '';
}

var dados = [];

async function iniciarBusca() {
    const url = "./../.././database/data.json";
    // Se dados ja carregado, nao chama mais API
    if (dados.length > 0) {
        carregarDadosTela();
        return;
    }
    // Tratamento de Erros
    // Doc - > https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        carregarDadosMemoria(result);
        carregarDadosTela();

    } catch (error) {
        console.error(error.message);
    }

}

// Carrega dados no array em memoria
function carregarDadosMemoria(result) {
    dados.push(...result);
}

// Componente card 
function cardComponente(card) {
    return `
            <article class="card">
                <h2>${card.nome}</h2>
                <p>${card.data_criacao}</p>
                <p>${card.descricao}</p>
                <a href="${card.link_oficial}" target="_blank">Saiba mais</a>
            </article>`
}

// Lista dados na Tela
function carregarDadosTela() {
    const cardsTela = document.querySelector(".card-container");
    const buscaDoUsuario = document.querySelector("#campo-busca").value;

    // Doc -> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

    let dadosFiltrados = dados.filter((dado) => {
        return dado.nome.toLowerCase().includes(buscaDoUsuario.toLowerCase()) ||
            dado.descricao.toLowerCase().includes(buscaDoUsuario.toLowerCase())
    })
    // Limpa os dados da Tela
    cardsTela.innerHTML = "";
    // Loop em todos os dados do Array
    dadosFiltrados.forEach(dado => {
        cardsTela.innerHTML += cardComponente(dado);
    });
}
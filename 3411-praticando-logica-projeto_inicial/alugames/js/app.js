function alterarStatus(id){
    let gameItemDiv = document.querySelector(`#game-${id} .dashboard__item__img`);
    let gameItemBtn = document.querySelector(`#game-${id} .dashboard__item__button`);
    let nameItem = document.querySelector(`#game-${id} .dashboard__item__name`);
    
    // 2. Verifique se a classe está presente
    if (gameItemDiv.classList.contains('dashboard__item__img--rented') && 
        gameItemBtn.classList.contains('dashboard__item__button--return')) {
        console.log('A classe já foi aplicada.');
        // Código a ser executado se a classe existir
        gameItemDiv.classList.remove('dashboard__item__img--rented');
        gameItemBtn.classList.remove('dashboard__item__button--return');
        gameItemBtn.textContent = "Alugar";
        nameItem.style.color = "white";
    } else {
        console.log('A classe não foi aplicada.');
        // Código a ser executado se a classe não existir
        gameItemDiv.classList.add('dashboard__item__img--rented');
        gameItemBtn.classList.add('dashboard__item__button--return');
        gameItemBtn.textContent = "Devolver";
        nameItem.style.color = "red";
    }
}
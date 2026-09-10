// Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:

// 1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

// 2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

// 3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

// 4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.
let cidade = prompt("Qual sua cidade favoritas \n Roma ou Paris!");

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase

if (cidade.toLowerCase() === "roma") {
     // mostre a foto do “Coliseu”
     alert("Coliseu")
}
else if (cidade.toLowerCase() === "paris") {
     // mostre a foto do “Torre Eiffel”
     alert("Torre Eiffel")
}
else {
     // dê a resposta “Você não digitou nenhuma cidade válida”
     alert("Você não digitou nenhuma cidade válida")
}

let idade = 0;

while (idade < 8) {
     // algum comando para imprimir a idade
     idade = idade + 1;
}

alert(idade)
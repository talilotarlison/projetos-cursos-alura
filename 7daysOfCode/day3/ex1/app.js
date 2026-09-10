// Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:

// 1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

// 2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

// 3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

// 4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

function getEscolha(msg) {
     let escolha = prompt(msg);

     while (parseInt(escolha) !== 1 && parseInt(escolha) !== 2) {
          alert("Escolha incorreta, tente novamente!!");
          escolha = prompt(msg);
     }
     return escolha;
}

let escolha = getEscolha("Qual carreira voce quer seguir ?  \n [1] Front-End \n [2] Back-End")

if (parseInt(escolha) === 1) {
     let escolhaFront = getEscolha("Qual carreira voce quer seguir ?  \n [1] React \n [2] Vue");

     if (parseInt(escolhaFront) === 1) {
          let escolhaReact = getEscolha("Voce vai ser torna desenvolvedor? \n [1] React \n [2] FullStack");

          if (parseInt(escolhaReact) === 1) {
               alert("Parabens na carrerira React!!");
          } else if (parseInt(escolhaReact) === 2) {
               alert("Parabens na carrerira FullStack!!");
          }
     } else if (parseInt(escolhaFront) === 2) {
          let escolhaVue = getEscolha("Voce vai ser torna desenvolvedor? \n [1] Vue \n [2] FullStack");

          if (parseInt(escolhaVue) === 1) {
               alert("Parabens na carrerira Vue!!");
          } else if (parseInt(escolhaVue) === 2) {
               alert("Parabens na carrerira FullStack!!");
          }
     }
} else if (parseInt(escolha) === 2) {
     let escolhaBack = getEscolha("Qual carreira voce quer seguir ?  \n [1] C# \n [2] Java");

     if (parseInt(escolhaBack) === 1) {
          let escolhaC = getEscolha("Voce vai ser torna desenvolvedor? \n [1] C# \n [2] FullStack");

          if (parseInt(escolhaC) === 1) {
               alert("Parabens na carrerira C#!!");
          } else if (parseInt(escolhaC) === 2) {
               alert("Parabens na carrerira FullStack!!");
          }
     } else if (parseInt(escolhaBack) === 2) {
          let escolhaJava = getEscolha("Voce vai ser torna desenvolvedor? \n [1] Java \n [2] FullStack");

          if (parseInt(escolhaJava) === 1) {
               alert("Parabens na carrerira C#!!");
          } else if (parseInt(escolhaJava) === 2) {
               alert("Parabens na carrerira FullStack!!");
          }
     }

}

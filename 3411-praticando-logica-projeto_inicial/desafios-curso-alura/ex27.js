// No JavaScript, o uso do ponto e vírgula (;) não é obrigatório em todos os casos, mas é altamente recomendado. Isso acontece por causa de um recurso chamado ASI (Automatic Semicolon Insertion), que tenta inserir os ; automaticamente onde eles são esperados.

const soma = a => {
  return {
    resultado: a
  }
}

let resultado = soma(5)
console.log(resultado)
// class cpf estatica 
class CPF {
    static validaCPF(cpf) {
        cpf = cpf.replace(/\D/g, '');
        if (cpf.toString().length != 11 || /^(\d)\1{10}$/.test(cpf)) return false;
        var result = true;
        [9, 10].forEach(function (j) {
            var soma = 0, r;
            cpf.split(/(?=)/).splice(0, j).forEach(function (e, i) {
                soma += parseInt(e) * ((j + 2) - (i + 1));
            });
            r = soma % 11;
            r = (r < 2) ? 0 : 11 - r;
            if (r != cpf.substring(j, j + 1)) result = false;
        });
        return result;
    }
}

// class pegar data estatica
class Data {
    static dataAnoAtual() {
        const dataAtual = new Date(); // Cria uma instância do objeto Date
        const anoAtual = dataAtual.getFullYear(); // Obtém o ano atual
        return anoAtual; // Exibe o ano atual (por exemplo, 2025)
    }
}

// classe pessoa 
class Pessa {
    nome;
    dataNascimento;
    cpf;
    constructor(nome, dataNascimento, cpf) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.cpf = this.setCpf(cpf);
    }

    greet() {
        console.log(`Nome: ${this.nome} - Idade: ${this.getIdade()} anos.`);
    }

    getIdade() {
        let anoAtual = Data.dataAnoAtual();
        let anoNascimento = anoAtual - this.dataNascimento;
        return anoNascimento;
    }

    get getCpf() {
        let cpf = this.cpf;
        return cpf;
    }

    setCpf(cpf) {
        let isCpf = CPF.validaCPF(cpf);
        if (isCpf) {
            return cpf;
        } else {
            console.error("CPF invalido, tente novamente!");
            return;
        }
    }

}


// class aluno extendido  de Pessoa

class Aluno extends Pessa {
    id;
    cargo;
    notas;
    aprovado;
    media
    constructor(id, cargo, nome, dataNascimento, cpf) {
        super(nome, dataNascimento, cpf);
        this.id = id;
        this.cargo = cargo;
        this.aprovado = false;
        this.media = 0;
        this.notas = [];
    }

    greet() {
        console.log(`Id: ${this.id} - Cargo:${this.cargo} - Nome: ${this.nome} - Idade: ${this.getIdade()} anos.`);
    }

    adcionarNota(nota) {
        if (nota >= 0 && nota < 10) {
            this.notas.push(nota);
        } else {
            console.error("Nota maxima de 0 a 10 .")
        }

    }

    getNotas() {
        if (this.notas.length >= 0) {

            this.notas.map((nota, index) => {

                console.log(`Nota ${index + 1} : ${nota}`);
            });
        } else {
            console.log(`Aluno ${this.nome}, sem notas lançadas.`)
        }

    }

    lançarNotas() {
        const notas = this.notas;
        const totalNotas = this.notas.length;
        const soma = notas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

        let mediaAluno = soma / totalNotas;
        this.media = mediaAluno.toFixed(2);

        if (mediaAluno >= 6) {
            this.aprovado = true;
        } else {
            this.aprovado = false;
        }
    }

    getAprovacao() {
        if (this.aprovado == true) {
            console.log(`Aluno ${this.nome}, com media ${this.media} esta Aprovado .`)
        } else {
            console.log(`Aluno ${this.nome}, com media ${this.media} esta Reprovado .`)
        }
    }

}

// class professor extendido de Aluno

class Professor extends Aluno {
    disciplina;
    constructor(id, cargo, nome, dataNascimento, cpf, disciplina) {
        super(id, cargo, nome, dataNascimento, cpf);
        this.disciplina = disciplina;
    }

    greet() {
        console.log(`Id: ${this.id} - Cargo:${this.cargo} - Disciplina : ${this.disciplina}- Nome: ${this.nome} - Idade: ${this.getIdade()} anos.`);
    }
}

// class tutor extendido de professor

class Tutor extends Professor {
    constructor(id, cargo, nome, dataNascimento, cpf, disciplina) {
        super(id, cargo, nome, dataNascimento, cpf, disciplina);
    }
}


// class curso

class Curso {
    nome
    codigo
    disciplinas
    constructor(codigo, nome) {
        this.codigo = codigo;
        this.nome = nome;
        this.disciplinas = [];
    }

    greet() {
        console.log(`Curso: ${this.nome} - Codigo ${this.codigo}.`);
    }

    adcionarDisciplina(disciplina) {
        this.disciplinas.push(disciplina);
    }

    getNameDisciplinas() {
        this.disciplinas.forEach(disc => {
            console.log(this.codigo, this.nome, disc.nome, disc.codigo, disc.professor, disc.tutor, disc.alunos);
        });
    }
}

// class disciplina
class Disciplina {
    nome
    codigo
    alunos;
    professor
    tutor
    constructor(codigo, nome, professor, tutor) {
        this.codigo = codigo;
        this.nome = nome;
        this.alunos = [];
        this.professor = professor;
        this.tutor = tutor;

    }

    greet() {
        console.log(`Disciplina: ${this.nome} - Codigo ${this.codigo} - professor: ${this.professor.nome} -  tutor: ${this.tutor.nome} `);
    }

    adcionarAluno(aluno) {
        this.alunos.push(aluno);
    }

    getTodosAlunos() {
        this.alunos.forEach(aluno => {
            console.log(aluno.nome, aluno.id, aluno.notas, aluno.aprovado);
        });
    }
}


// Creating an object from the Aluno class
const aluno1 = new Aluno(24, "Aluno", "Alice", 1990, '825.566.405-02');
aluno1.greet();
console.log(aluno1.getCpf);
aluno1.adcionarNota(5);
aluno1.adcionarNota(6);
aluno1.adcionarNota(7);
aluno1.getNotas();
aluno1.lançarNotas();
aluno1.getAprovacao();

//aluno 2

const aluno2 = new Aluno(14, "Aluno", "Fabio", 1990, '793.869.906-36');
aluno2.greet();
console.log(aluno2.getCpf);
aluno2.adcionarNota(5);
aluno2.adcionarNota(6);
aluno2.adcionarNota(7);
aluno2.getNotas();
aluno2.lançarNotas();
aluno2.getAprovacao();



// Creating an object from the Professor class
const professor1 = new Professor(20, "Professor", "Joao", 1982, '755.529.900-30', "Redes de computadores");
professor1.greet();
console.log(professor1.getCpf);

// Creating an object from the Tutor class
const tutor1 = new Tutor(10, "Tutor", "Fabricio", 1972, '501.049.390-01', "Rsedes de computadores");
tutor1.greet();
console.log(tutor1.getCpf);


// Creating an object from the Disciplina class
let disciplina1 = new Disciplina("844848", "Redes de computadores", professor1, tutor1);
disciplina1.adcionarAluno(aluno1);
disciplina1.adcionarAluno(aluno2);
disciplina1.getTodosAlunos();


// Creating an object from the curso class
const curso1 = new Curso("4585", "Ciencia da Computacao");
curso1.greet(); // apresentação
curso1.adcionarDisciplina(disciplina1);
curso1.getNameDisciplinas();

curso1.disciplinas[0].greet();
curso1.disciplinas[0].alunos[0].greet();
curso1.disciplinas[0].alunos[0].getAprovacao();


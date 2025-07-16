class Pessoa {
    
    constructor(nome,idade){
        this.nome =  nome;
        this.idade = idade;

    }

    dizerOla() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);

    }

}

const pessoa1 = new Pessoa('ana', 30);
pessoa.dizerOla()

class Funcionario extends Pessoa {
    constructor (nome,idade,matricula){
        super(nome,idade)
        this.matricula = matricula

    }

    dizerOlaa(){

        console.log(`Olá, meu nome é ${this.nome} tenho ${this.idade} anos e minha matricula é ${this.matricula}.`);

    }

}

 const funcionario = new Funcionario('Jucelino', 20, 13472424);
 funcionario.dizerOlaa();




































class Pessoa{

    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('fabio')
p1.falar()

const pessoaFactory = nome => {
    return{
        falar:() => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = pessoaFactory('Fabio')
p2.falar()
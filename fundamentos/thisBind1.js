const pessoa = {
    saudacao: "bom dia",
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() //conflito entre paradigma funcional e OO

//const falarDePessoa = falar.bind(pessoa)
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
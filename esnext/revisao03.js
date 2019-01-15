//ES8: Object.values/Object.entries

const obj = {a:1, b:2, c:3}
console.log(Object.values(obj))
console.log(Object.entries(obj))


//Melhorias na notação literal
const nome = 'Fabio'
const pessoa = {
    nome,
    ola(){
        return 'retorno da funcao'
    }
}
console.log(pessoa.nome, pessoa.ola())

//Class
class Animal {}
class Cachorro extends Animal{    
    falar(){
        return 'au au!!!!'        
    }
}
c = new Cachorro()
console.log(c.falar())
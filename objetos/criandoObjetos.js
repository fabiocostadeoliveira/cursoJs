// Forma literal
const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)


//Funcoes construtoras
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = function(){
        return preco * (1 - desc)
    }
}

const p1 = new Produto ('lapis',1.00,.10)
const p2 = new Produto ('lapis de cor',11.00,.11)
console.log(p1.getPrecoComDesconto(),p2.getPrecoComDesconto())

// Funcao factory

function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        },
        getNome(){
            return nome
        }
    }
}

const f1 = criarFuncionario('fabio',1000,1)
const f2 = criarFuncionario('Joao',2000,4)

console.log(f1.getNome() + ' - ' + f1.getSalario()) 
console.log(f2.getNome() + ' - ' + f2.getSalario()) 

//Object.create
const filha = Object.create(null)
filha.nome = "maria"
console.log(filha)


//criar objeto de um json
const fromJson = JSON.parse('{"info":"Eu sou um Json"}')
console.log(fromJson.info)





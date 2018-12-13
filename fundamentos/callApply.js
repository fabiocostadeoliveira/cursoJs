function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 - imposto)}`
}


const produto = {
    nome: 'Vassoura',
    preco: 10,
    desc: .10,
    getPreco
}

console.log(produto.getPreco())

const carro = {preco:'100000', desc:.01}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro,.10,'$'))
console.log(getPreco.apply(carro,[.10,'$']))
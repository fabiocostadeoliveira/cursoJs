const carrinho = [
    '{ "nome":"borracha", "preco":3.45}',
    '{ "nome":"caderno", "preco":13.90}',
    '{ "nome":"kit de lapis", "preco":41.22}',
    '{ "nome":"caneta", "preco":7.50}'
]
/// RETORNAR UM ARRAY APENAS COM OS PREÇOS
console.log(carrinho)

const retornaPreco = function(e){
    obj = JSON.parse(e)
    return obj.preco
}

precos = carrinho.map(retornaPreco)
console.log(precos)

//FORMA CRIADA PELO PROFESSOR (mais bonita que a minha solucao)

const paraObj = e => JSON.parse(e)
const getPreco = e => e.preco

result2 = carrinho.map(paraObj).map(getPreco)
console.log(result2)
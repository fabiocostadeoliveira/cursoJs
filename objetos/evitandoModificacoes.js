//Object.preventExtension

const produto = Object.preventExtensions({
    nome: 'sem nome', 
    preco: 1.99,
    tag:'promocao'
})
produto.nome = 'Peso para papel'  // é permitido
produto.teste = 'aaaa'            // Criacao de campo nao é permitida
delete produto.tag                // é permitido
console.log('Extensivel:',Object.isExtensible(produto))
console.log(produto)

//Object.seal
const pessoa = {
    nome: 'Juliana',
    idade: 35
}
Object.seal(pessoa)
pessoa.nome = 'Maria' // é permitido
pessoa.sobrenome = 'silva' //criação nao é permitido
delete pessoa.idade        // deleção nao é permitido
console.log(pessoa)

//Object.freeze = seal + valores do objeto constante






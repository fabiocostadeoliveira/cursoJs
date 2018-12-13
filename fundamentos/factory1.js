//factory simples
function criarPessoa(){
    return{
        nome : 'Fabio',
        sobrenome: 'Oliveira'
    }
}
console.log(criarPessoa())


//factory passando parametros
function criarProduto(nome, preco){
    return{
        nome:nome,
        preco:preco,
        desconto: '3.5'
    }
}
console.log(criarProduto('vassoura',10))


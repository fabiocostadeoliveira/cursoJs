//factory passando parametros
function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: '3.5'
    }
}
console.log(criarProduto('vassoura',10))
const sequence = {
    _id: 1,
    get id(){
        console.log('dentro do sequence _id:',this._id)
        return this._id++
    }
}

const produtos = {}

function salvarProduto(produto){
    console.log('function do sequence',sequence.id)
    if(!produto.id) {
        produto.id = sequence.id
    }    
    console.log('produto.id',produto.id,'produto:',produto)
    produtos[produto.id] = produto
    return produto
}

function getProduto(id){
    return produtos[id] || {}
}

function getProdutos(){
    return Object.values(produtos)
}

function excluirProduto(id){
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto}
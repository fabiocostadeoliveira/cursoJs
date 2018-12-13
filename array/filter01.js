const produtos = [
    {nome:"notbook",preco:2499,fragil:true},
    {nome:"IPad pro",preco:4199,fragil:true},
    {nome:"Copo de vidro",preco:12.49,fragil:true},
    {nome:"Copo de plastico",preco:18.99,fragil:false}
]

const filtroProdutoCaro = e => e.preco > 2000
const filtroProdutoFragil = e => e.fragil

console.log(produtos.filter(function(){
    return false
}))

console.log(produtos.filter(filtroProdutoCaro).filter(filtroProdutoFragil))



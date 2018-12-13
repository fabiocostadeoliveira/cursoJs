const soma = function(a,b){
    return a + b
}
const imprimeResultado = function(a, b, operacao=soma){
    console.log(operacao(a,b))
}

imprimeResultado(2,2)

imprimeResultado(2,2,function(x,y){
    return x - y
})
imprimeResultado(5,5,(x,y) =>  x * y)


const pessoa = {
    falar: function(){
        console.log("opa blz ?")
    }
}

pessoa.falar()

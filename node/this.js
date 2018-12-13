console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)     // O THIS FORA DE UMA FUNCAO, APONTA PARA O MODULE.EXPORTS


function logThis(){
    console.log('dentro da funcao')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global) //O THIS DENTRO DE UMA FUNCAO APONTA PARA O GLOBAL
}

logThis()
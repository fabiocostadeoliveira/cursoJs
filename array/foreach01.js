const aprovados = ['fabio','joao','maria','jose']

//passando um function normal com dois parametros
aprovados.forEach(function(elemento,indice){
    console.log(indice,elemento)
})

console.log('\n' )

//passando um function normal com tres parametros
aprovados.forEach(function(elemento,indice,array){
    console.log(indice,elemento)
    console.log(array)
})

console.log('\n' )
//arrow func simples 1 parametro
aprovados.forEach(aprovado => console.log(aprovado))

//arrow passando 1 parametro
const funcExibeAprovados = aprovado => console.log(`arrow func: ${aprovado}`)
aprovados.forEach(funcExibeAprovados)

//arrow passando 2 parametros
const funcExibeAprovados2 = (aprovado,indice) => console.log(`arrow func: ${indice}) ${aprovado}`)
aprovados.forEach(funcExibeAprovados2)
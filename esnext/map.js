const tecnologias = new Map()
tecnologias.set('react',true)
tecnologias.set('angular',true)
tecnologias.set('java',{jpa:true})

console.log(tecnologias.react) // ISSO NAO VAI FUNCIONAR    
console.log(tecnologias.get('react'))

const chavesVariadas = new Map([
    [function(){},'é uma funcao'],
    [{}, 'é um objeto'],
    [123,'é um numero']
])

console.log(chavesVariadas)
chavesVariadas.forEach((valor,indice) => {
    console.log(`chave: ${indice} => valor: ${valor}`)
}) 

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123,'a')
chavesVariadas.set(123,'b') //map nao aceita repeticao, nesse caso vai atualizar o ultimo valor

console.log(chavesVariadas)
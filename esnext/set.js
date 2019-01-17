// nao aceita repeticao / e nao é indexado

const times = new Set()
times.add('Vasco')
times.add('Sao paulo')
times.add('Chape').add('bahia').add('fluminense')
times.add('Vasco') // NAO IRA SE REPETIR

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))

times.delete('bahia')
console.log(times.has('bahia'))

// CRIAR SET COM UM ARRAY
const nomes =[ 'fabio','dani','bia']
const nomesSet = new Set(nomes)
console.log(nomesSet)


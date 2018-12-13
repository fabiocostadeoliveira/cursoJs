const pilotos = ['vettel','alonso','raikkonen','massa']
pilotos.pop() // retira o ultimo elemento da lista
console.log(pilotos)

pilotos.push('verstappen')
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton')  // Insere elemento no inicio da lista
console.log(pilotos)


// splice pode adicionar ou remover elementos, dependendo dos parametros passados
//adicionar

pilotos.splice(2,0,'Bottas','Massa')
console.log(pilotos)

//remover

pilotos.splice(3,1)
console.log(pilotos) // remove 1 elemento a partir da posicao 3 do elemento

const algunsPilotos1 = pilotos.slice(2) // slice gera um novo array (gera a partir do indice 2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) // o segundo parametro, o 4, nao sera pego, ou seja, sera retornado do indice um até o tres
console.log(algunsPilotos2)

const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')


const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor) // ISSO MOSTRA QUE ESTA USANDO UMA UNICA INSTANCIA COM O CACHE CRIADA PELO NODE

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor) // MOSTRA QUE USANDO UMA FACTORY DE RETORNO CRIA-SE UMA INSTANCIA A CADA CHAMADA

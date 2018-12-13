const notas = [5.5,4.5,8.7,3.2,9,10,2]

const notasBaixas01 = notas.filter(function(nota){
    return nota < 5
})

console.log(notasBaixas01)


const notasBaixas02 = notas.filter(nota => nota < 5)

console.log(notasBaixas02)
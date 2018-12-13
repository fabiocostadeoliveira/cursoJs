const fabricantes = ['fiat','renaut','chevrolet']


function imprimirFabricantes(fabricante){
    console.log(fabricante)
}

fabricantes.forEach(imprimirFabricantes)

fabricantes.forEach(function(nome,index){
    console.log(index + '-',nome)
})

fabricantes.forEach(x => console.log(x))
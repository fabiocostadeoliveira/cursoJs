function getAleatorioEntre(min, max){
    const valor = Math.random() * (max - min ) + min
    return Math.floor(valor)
}

let opcao = 0

do{
    opcao = getAleatorioEntre(-1,50)
    console.log('Sorteado=',opcao)
}while(opcao != -1)
const aprovados = ['fabio','joao','maria','jose']

aprovados.forEachFCO = function(funcao){    
    this.forEach(funcao)
}
console.log(aprovados)

//passando um function normal com dois parametros
aprovados.forEachFCO(function(elemento,indice){
    console.log('aaki',indice,elemento)
})

////FORMA FEITA NO VIDEO
Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length;i++){
        callback(this[i],i,this)
    }
}

aprovados.forEach2(function(elemento,indice){
    console.log('segunda maneira',indice,elemento)
})


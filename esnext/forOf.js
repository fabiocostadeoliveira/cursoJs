
for (let letra of 'cod3r'){  // DISPONIBILIZA DIRETAMENTE O VALOR
    console.log(letra)
}

const assuntoECMa = ['Map','Set','Promisse']

for (let i in assuntoECMa){  //DISPONIBILIZA O INDICE
    console.log(i)
}

for(let assunto of assuntoECMa){
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map',{abordado: true}],
    ['Set',{abordado: true}],
    ['Promisse',{abordado: false}]
])


for (let assunto of assuntosMap){
    console.log(assunto)
}


//pegando as chaves
for(let chave of assuntosMap.keys()){
    console.log(chave)
}

//pegando os valores
for(let valor of assuntosMap.values()){
    console.log(valor)
}

//pegando chave e valor com o destructuring
for(let [c,v] of assuntosMap.entries()){
    console.log('chave',c,'valor',v)
}

const s = new Set(['a','b','c'])
for(let letra of s){
    console.log(letra)
}
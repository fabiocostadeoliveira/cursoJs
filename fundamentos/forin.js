const notas = [3.3,10,7.4,5.5,6.1]

for (let i in notas){
    console.log(notas[i])
}

const pessoa = {
    nome: 'fabio',
    sobrenome: 'oliveira',
    idade: 31
}

for(let attr in pessoa){
    console.log(`${attr} = ${pessoa[attr]}` )
}
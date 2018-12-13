const pai = {nome: 'pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai) //Cria um novo objeto com a herança do pai
filha1.nome = 'maria'
console.log(filha1.corCabelo)


const filha2 = Object.create(pai,{
    nome:{value: 'Bia', writable:false ,enumerable: true}
})

console.log(filha2)
filha2.nome = 'Carla'
console.log(` ${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2){
    console.log(key)

    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança ${key}`)
}
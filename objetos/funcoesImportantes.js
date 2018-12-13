const pessoa = {
    nome: 'Beatriz',
    idade: 1,
    peso: 10
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(element => {
    console.log(`${element[0]} - ${element[1]}`)
});

Object.entries(pessoa).forEach( ([chave,valor]) => {
    console.log(chave,valor)
    console.log(`${chave} -> ${valor}`)
});


//Definindo propriedades de um objeto
Object.defineProperty(pessoa,'dataNascimento',{
    enumerable:true,
    writable:false,
    value: '01/01/2019'
})


//Definindo propriedades de um objeto, sem ser listado no getkeys
Object.defineProperty(pessoa,'rg',{
    enumerable:false,
    writable:false,
    value: '999999999'
})

console.log(pessoa)
console.log(Object.keys(pessoa))



//Object.assign ECma15 => contatenando objetos
const dest = {a: 1}
const obj1 = {b:2}
const obj2 = {c:3, a:4}

const obj = Object.assign(dest,obj1,obj2)
Object.freeze(obj)
obj.a = 1234
console.log(obj)
{
    var a = 'a'
    let b = 'b'
    console.log(b)
}
//console.log(b) /// ISSO NAO PODE, POIS FOI DEFINIDA DENTRO DO BLOCO
console.log(a)

// template string

const produto = 'Ipad'
console.log(`${produto} é caro !!`)

//Destruturing
const [l,e,...tras] = 'Cod3r'
console.log(l,e,tras)

const [x, ,y] = [1,2,3]
console.log(x,y)

const {nome, idade:i} = {nome:'ana', idade:18}
console.log(nome,i)



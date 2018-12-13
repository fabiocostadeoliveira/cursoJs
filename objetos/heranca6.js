function Aula (nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo',123)
const aula2 = new Aula('até breve',456)

console.log(aula1,aula2)

//SIMULANDO O OPERACAO NEW.........
function novo(func,...params ){
    const obj = {}
    obj.__proto__ = func.prototype
    func.apply(obj,params)
    return obj
}

const aula3 = novo(Aula,'aula herança 01',789)
const aula4 = novo(Aula,'aula heranca 02',101)

console.log(aula3,aula4)


//cadeia de prototipos (prototype chain)
Object.prototype.attr0 = '0' // isso nao é recomendado, somente para efeito de testes
const avo = {attr1:'a'}
const pai = {__proto__:avo, attr2:'b',attr3: 3}
const filho = {__proto__:pai,attr3:'c'}
console.log(filho.attr0,filho.attr1,filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,

    acelerarMais(delta){
        if(this.velAtual <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    }
    ,
    status(){
        return `${this.velAtual} Km/h de ${this.velMax} Km/h`
    }
}

const ferrari = {
    modelo: 'f40',
    velMax: 324
}

const volvo = {
    modelo: 'v40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }    
}

//Define a relacao de prototipos
Object.setPrototypeOf(ferrari,carro)
Object.setPrototypeOf(volvo,carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(200)
console.log(ferrari.status())


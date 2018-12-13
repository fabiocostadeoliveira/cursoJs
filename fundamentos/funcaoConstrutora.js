function Carro (velocidadeMaxima = 20, delta = 5){
    //variavel privada
    let velocidadeAtual = 0

    //metodo publicas
    this.acelerar = function(){
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }


    //Metodo public
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const punto = new Carro
punto.acelerar()
punto.acelerar()
console.log(punto.getVelocidadeAtual())


const ferrari = new Carro(300,20)

ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)
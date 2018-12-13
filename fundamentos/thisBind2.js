//Errado
function Pessoa(){
    this.idade = 0    
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    },1000)
}
/// Primeira forma
function Pessoa2(){
    this.idade = 0    
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this),1000)
}

/// Segunda forma
function Pessoa3(){
    this.idade = 0    
    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    },1000)
}


new Pessoa3
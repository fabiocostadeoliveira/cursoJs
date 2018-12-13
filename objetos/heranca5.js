/// NAO FAÇA ISSO ABAIXO, SOMENTE DITATICAMENTE
console.log(typeof String)
console.log(typeof Function)
console.log(typeof Object)

String.prototype.reverse  = function(){
    return this.split('').reverse().join('')
}
console.log('fabio'.reverse())

Array.prototype.first = function(){
    return this[0]
}

console.log(['fabio','costa','de','oliveira'].first())

String.prototype.toString = function(){
    return 'Lascou tudo'
}

console.log('fasdfasd'.reverse())




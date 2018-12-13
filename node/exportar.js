console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1          //ISSO SERA EXPORTADO
exports.b = 2       //ISSO SERA EXPORTADO
module.exports.c = 3 //ISSO SERA EXPORTADO

exports = null      // ISSO NAO FUNCIONA, OU SEJA, NAO VAI EXPORTAR
exports = {         // ISSO NAO FUNCIONA, OU SEJA, NAO VAI EXPORTAR
    nome: 'teste'
}

console.log(module.exports)
module.exports = {publico: true}  //ISSO SERA EXPORTADO

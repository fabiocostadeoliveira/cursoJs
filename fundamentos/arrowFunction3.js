let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)

comparaComThis(global)
comparaComThis(this)
comparaComThis(obj)

//let comparaComThisArrow = (param) => {console.log(this === param)}

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)
comparaComThisArrow(this)

comparaComThisArrow = comparaComThisArrow.bind(obj)// ISSO NAO FUNCIONA, PERMANECE O this da arrowFunction
comparaComThisArrow(obj) //NAO FUNCIONA, SERA FALSE
comparaComThisArrow(module.exports)


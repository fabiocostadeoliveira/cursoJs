const a = 1
const b = 2
const c = 3

//Forma antiga
const obj1 = {a:a, b:b,c:c}

//Forma ECma15
const obj2 = {a,b,c}

console.log(obj1,obj2)

const nomeAttr = 'nota'
const valorAttr = 8.9

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]:valorAttr}
console.log(obj4)

const obj5 = {
    //Forma antiga
    funcao1: function(){
        //...
    }
    ,
    //Forma Ecma15
    funcao2(){
        //......
    }
}

console.log(obj5)



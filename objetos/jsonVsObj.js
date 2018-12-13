const obj = {a:1,b:2,c:3}
console.log(JSON.stringify(obj))

//console.log(JSON.parse("{a:1,b:2,c:3}")) NAO PODE SER DESSA MANEIRA
//console.log(JSON.parse("{'a':1,'b':2,'c':3}")) NAO PODE SER DESSA MANEIRA COM ASPAS SIMPLES

console.log(JSON.parse('{"a":1,"b":2,"c":3}')) 
console.log(JSON.parse('{"a":1,"b":2,"c":3,"d":{},"e":true,"f":[]}')) 


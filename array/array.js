console.log(typeof Array, typeof new Array, typeof[])


let aprovados = ['bia','fabio','ana']

console.log(aprovados)

aprovados = ['Bia','Carlos','Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Jose')
console.log(aprovados.length)

aprovados[9] = 'Maria'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados[8] === null)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)
aprovados.sort()
console.log(aprovados)

aprovados = ['Bia','Carlos','Ana']
aprovados.splice(1,1,'Elemento1','Elemento2')
console.log(aprovados)
aprovados.splice(1,0,'Elemento1','Elemento2')  // NAO APAGA NADA E SOMENTE ADICIONA
console.log(aprovados)
aprovados.splice(1,4)  // APARA 4 ELEMENTOS A PARTIR DO INCICE 1
console.log(aprovados)


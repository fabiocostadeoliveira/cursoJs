//Operador ...rest (juntar)/spread(espalhar)
//usar rest com parametro de funcao

//Usar spread com objeto
const funcionario = {nome: 'Maria', salario: 12345.67}
const clone = {ativo: true, ...funcionario}
console.log(clone)

//Usar spread com array
const grupoA = ['joao','pedro','gloria']
const grupoFinal = ['Maria','Rafaela',...grupoA]
console.log(grupoFinal)


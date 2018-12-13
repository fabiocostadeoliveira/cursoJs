
const alunos = [
    {nome: 'joao', nota: 7.3, bolsista: false},
    {nome: 'maria', nota: 9.2, bolsista: true},
    {nome: 'pedro', nota: 9.8, bolsista: false},
    {nome: 'ana', nota: 8.7, bolsista: true},
]

//FORMA FEITA PELO PROFESSOR, bem melhor que a minha
const funcTodosBolsistas = (resultado,bolsista) => resultado && bolsista
const funcAlgumBolsistas = (resultado,bolsista) => resultado || bolsista

console.log(alunos.map(a=>a.bolsista).reduce(funcTodosBolsistas))
console.log(alunos.map(a=>a.bolsista).reduce(funcAlgumBolsistas))

//MINHA FORMA
const todosBolsistas = alunos.map(a => a.bolsista).reduce(function(acumulado,atual){
    if (acumulado && atual) 
        return true
    else
        return false
})
const temAlunoBolsista = alunos.map(a => a.bolsista).reduce(function(acumulado,atual){
    if (acumulado || atual) 
        return true
    else
        return false
})
console.log('Todos Bolsistas:',todosBolsistas)
console.log('Tem Algum Bolsista:',temAlunoBolsista)


const alunos = [
    {nome: 'fabio', nota:8.7},
    {nome: 'joao', nota:10.0}
]

//Modo Imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++){    
    total1 +=alunos[i].nota
}
console.log(total1 / alunos.length)

//Modo Declarativo
const getNota = aluno => aluno.nota
const soma    = (total,nota) => total + nota
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)
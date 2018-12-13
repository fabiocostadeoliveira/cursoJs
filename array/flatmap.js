const escola = [
    {
        nome: 'Turma M1',
        alunos:[
            {nome : 'gustavo', nota: 8.1},
            {nome : 'ana', nota: 9.3}
        ]
    },
    {
        nome: 'Turma M2',
        alunos:[
            {nome : 'rebeca', nota: 8.9},
            {nome : 'roberto', nota: 7.3}
        ]
    }
]

const getNotasDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotasDoAluno)
const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

// COM FLATMAP
Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([],this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)




//tagged template - processa o template dentro de uma funcao

function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'outra string qualquer'
}

const aluno = 'fabio'
const situacao = 'aprovado'

console.log( tag `o aluno ${aluno} esta ${situacao}`)

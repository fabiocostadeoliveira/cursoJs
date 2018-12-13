const valor = 'global'


function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'local' // nao pega esse valor por causa do contexto de onde a funcao foi escrita
    console.log('dentro da funcao exec',valor)
    minhaFuncao()
}

exec()
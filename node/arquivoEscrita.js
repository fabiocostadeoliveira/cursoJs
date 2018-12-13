const fs = require('fs')

const produto = {
    nome: 'celular',
    preco: 1234.00,
    desconto:.10
}

fs.writeFile(__dirname + '/arquivoGerado.json',JSON.stringify(produto), err => {
    console.log( err || 'Arquivo Gerado com Sucesso!!')
})
const fs = require('fs')

const caminho = __dirname + '/arquivo.json'
//sincrono...
const conteudo = fs.readFileSync(caminho,"utf-8")
console.log(conteudo)

//assincrono...
fs.readFile(caminho,"utf-8",(err,conteudo) =>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//outra forma de ler um json
const config = require('./arquivo.json')
console.log(config.db)

//lendo pastas
fs.readdir(__dirname,(erro,conteudo) => {
    console.log('conteudo do diretorio')
    console.log(conteudo)
})

const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const saudacao = require('saudacao');
console.log(saudacao.ola)

const modC = require('./pastaC')
console.log(modC.ola2)

// const http = require('http')
// http.createServer((req,res) => {
//     res.write('Aqui esta no server')
//     res.end()
// }).listen(8080)
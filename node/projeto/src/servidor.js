const porta = 3003

const express = require('express')
const app     = express()

/*
app.get('/produtos',(req,res,next) =>{
    console.log('Middleware1.....')
    next()
})
*/

/*
app.use((req,res,next) =>{
    res.send({nome:'Notbookkkk',preco:123.34})    // isso aqui faz aceitar qq tipo de requisicao, post,get, put msm acessando a url principal
})
*/


app.get('/produtos',(req,res,next) =>{
    res.send({nome:'Notbookkkk',preco:123.34})    // vai converter automaticamente para json
})

app.listen(porta,() =>{
    console.log(`Executando na porta ${porta}`)
})
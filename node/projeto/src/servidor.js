const porta = 3003

const express = require('express')
const app     = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')
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
    //res.send({nome:'Notbookkkk',preco:123.34})    // vai converter automaticamente para json
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id',(req,res,next) =>{
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos',(req,res,next) =>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.params.nome,
        preco: req.params.preco
    })
    res.send(produto)
})

app.listen(porta,() =>{
    console.log(`Executando na porta ${porta}`)
})
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

app.use(bodyParser.urlencoded({extended: true } ))
app.get('/produtos',(req,res,next) =>{
    //res.send({nome:'Notbookkkk',preco:123.34})    // vai converter automaticamente para json
    //res.send({name:'fabio',id:1})
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id',(req,res,next) =>{
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos',(req,res,next) =>{
    console.log('passou 1')
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    console.log('produto:',produto)
    res.send(produto)
})

app.put('/produtos/:id',(req,res,next) =>{    
    const produto = bancoDeDados.salvarProduto({
        id:req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })    
    res.send(produto)
})

app.delete('/produtos/:id',(req,res,next) =>{    
    const produto = bancoDeDados.excluirProduto(req.params.id)    
    res.send(produto)
})

app.listen(porta,() =>{
    console.log(`Executando na porta ${porta}`)
})
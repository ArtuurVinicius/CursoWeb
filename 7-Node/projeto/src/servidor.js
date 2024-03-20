const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true})) // transforma o corpo sa requisição em objeto

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProduto())
})// o metodo send vai converter para JSON

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id)) // .id vem do get(produtos/:id)
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // o objeto sera convertido em JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // o objeto sera convertido em JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id )
    res.send(produto) // o objeto sera convertido em JSON
})

// app.use((req,res,next) => {
//     res.send({nome: 'Notebook', preco: 123.45})
// }) Dessa forma ele vai atender a qualquer requisição '/exemplo'


app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})
const express = require('express')
const app = express()

const port = '3000'

const server = require('http').createServer(app)

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/about',(req,res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/projetos',(req,res) => {
    res.sendFile(__dirname + '/src/projetos.html')
})
app.get('/skills',(req,res) => {
    res.sendFile(__dirname + '/src/skills.html')
})
server.listen(port,() => {
    console.log('Servidor rodando em http://localhost:3000')
})

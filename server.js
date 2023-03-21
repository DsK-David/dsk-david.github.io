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
    res.sendFile(__dirname + '/projetos.html')
})
app.get('/skills',(req,res) => {
    res.sendFile(__dirname + '/skills.html')
})
app.get('/DsK-David/api/projects/',(req,res) => {
    res.json([
        {
            project_name:'GitUSers',
            project_bio:'GitUsers é um sistema que te da informações sobre contas do github apenas com nome dos usuarios',
            project_url:'http://dsk-david.github.io/GitUsers',
            project_repo:'https://github.com/DsK-David/GitUsers'
        },
        {
            project_name:'IPTRACKER',
            project_bio:'É um programa que da informações sobre um endereço IP,nessas informações estão:Localização,Fuso Horario,Provedor e nome ',
            project_url:'http://dsk-david.github.io/iptracker',
            project_repo:'https://github.com/DsK-David/iptracker'
        },
        {
            project_name:'URL-CUTTER',
            project_bio:'Encurta URL com apenas alguns cliques',
            project_url:'http://dsk-david.github.io/urlcutter',
            project_repo:'https://github.com/DsK-David/urlcutter'
        },
        {
            project_name:'MONGO-TRANSLATER',
            project_bio:'Um pequeno tradutor consumindo uma API de tradução,funciona com varios idiomas',
            project_url:'http://dsk-david.github.io/mongotranslater',
            project_repo:'https://github.com/DsK-David/mongotranslater'
        },
        {
            project_name:'how-is-a-weather',
            project_bio:'Com esse programa podes saber o clima de qualquer pais ou cidade ',
            project_url:'https://dvisionse.github.io/How-is-a-weather-/',
            project_repo:'https://github.com/DVISIONSE/How-is-a-weather-'
        },
        {
            project_name:'BuscaTudo',
            project_bio:'Busca todo tem varios serviços como um sistema de busca de informações sobre um CEP,informações sobre a placa de um carro e tem um bot de conversar e um bot de pesquias por noticias',
            project_url:'https://github.com/DsK-David/BuscaTudo',
            project_repo:'https://github.com/DsK-David/BuscaTudo'
        }

])
})


server.listen(port,() => {
    console.log('Servidor rodando em http://localhost:3000')
})

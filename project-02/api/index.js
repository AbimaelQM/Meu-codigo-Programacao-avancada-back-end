// Configuração inicial
const express = require("express")
const mongoose = require("mongoose")
const app = express()

//Forma de ler JSON
app.use(
    express.urlencoded({
        extended:true,
    }),
)

app.use(express.json())


// Rota incial /endpoint
app.get('/',(req,res)=>{
    // Mostrar requisição

    res.json({message: "Oi express!"})
})


// entregar uma porta

const DB_USER = "abimael"
const DB_PASSWORD = "20190300029"

mongoose
    .connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apilinks.g7n0w.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log("conectamos ao mongoDB")
        app.listen(3000)
    })
    .catch(err => console.log(err))


// /*
// Esse codigo cria uma API para servir ao frontend da aplicação que simula o favoritos do navegador. 
// */

// // Importação dos módulos.
// const http = require('http')
// const URL = require('url')
// const fs = require('fs')
// const path = require('path')

// // Importação do documento urls.json. Nesse momento do código, o conteúdo do documento vai para o objeto data.
// const data = require('./urls.json')

// // Servidor rodando na porta 3000.
// http.createServer((req, res) => {
    
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     res.setHeader('Access-Control-Allow-Methods', 'POST,GET,DELETE,UPDATE')
//     res.setHeader('Access-Control-Max-Age', '256100')

//     // Desestruturação da query string da URL para obter os valores que estão associados às chaves name, url e del.
//     const { name, url, del } = URL.parse(req.url, true).query

//     // Função para escrever no documento JSON. Tanto no delete quanto no create. 
//     function writeFile(cb) {
//         fs.writeFile(
//             path.join(__dirname, 'urls.json'),
//             JSON.stringify(data, null, 2),
//             err => {
//                 if (err) throw err
//                 res.end('Operação realizada com sucesso!')
//             }
//         )
//     }

//     // Mostrar o conteúdo do JSON.
//     if (!name || !url)
//         return res.end(JSON.stringify(data))

//     // Delete - apagar do JSON.
//     if (del) {
//         data.urls = data.urls.filter(item => item.url != url)
//         return writeFile(message => res.end(message))
//     }

//     // Create - inserir no JSON.
//     data.urls.push({name, url})
//     return writeFile(message => res.end(message))

// }).listen(3000, () => console.log('Api is running.'))
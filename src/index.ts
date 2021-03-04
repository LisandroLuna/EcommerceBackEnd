import express from 'express'
const operaciones = require('./lib/functions.js')


const app = express()
app.get('/', (req, res) => {
    res.send({timeES6: operaciones.getTime()})
})

const PORT:number = 8080

app.listen(PORT, () => {
    console.log(`Servidor Typescript/WebPack en puerto ${PORT}`)
})
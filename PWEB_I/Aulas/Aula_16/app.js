const { name } = require('ejs')
const express = require('express')
const app = express()
const PORT = 8000
const dataAtual = new Date()
const dataFormatada = dataAtual.toLocaleString('pt-BR')

app.use(express.urlencoded({extended: true}))

app.listen(PORT, () => {
    console.log(`${dataFormatada} | http://localhost:${PORT}`)
})

app.get('/v1/hi', function(req, res) {
    const out = {msg: 'Hello, wolrd'}
    res.status(200).json(out)
    console.log(`${dataFormatada} | http://localhost:${PORT}/v1/hi`)
})

app.get('/v1/hi/user/:name', function(req, res) {
    const out = {
        msg: 'Hello, ' + req.params.name
    }
    res.status(200).json(out)
    console.log(`${dataFormatada} | http://localhost:${PORT}/v1/hi/user/${name}`)
})

app.post('/v1/hi', function(req, res) {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ error: "Name is required" })
    }

    const out = {
        msg: `Hello, ${name.toUpperCase()} from POST!`
    }
})

app.get('/*splat', function(req, res) {
    const err = {
        error: 'Invalid endpoint'
    }
    res.status(404).json(err)
})
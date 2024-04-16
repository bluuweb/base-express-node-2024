// Modulos commonjs node.js por defecto
// const express = require('express')

import express from 'express' // modulos ES6 type module

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
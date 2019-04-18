require('dotenv').config()
const express = require('express')
const massive = require('massive')
const productsMeth = require('./products_ctrl')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const app = express()

app.use(express.json())

app.listen(SERVER_PORT, () => {
    console.log('listening')
})

massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
})

app.get('/api/products', productsMeth.getAll)

app.get('/api/products/:id', productsMeth.getOne)

app.put('/api/products/:id', productsMeth.update)

app.post('/api/products', productsMeth.create)

app.delete('/api/products/:id', productsMeth.delete)


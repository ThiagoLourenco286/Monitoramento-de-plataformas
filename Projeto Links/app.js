const PORT = 3000;
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const linkRouters = require('./routers/linkRouters')

mongoose.connect('mongodb://localhost/newLinks');

let db = mongoose.connection;

db.on('Error', () => {
    console.log('Houve um erro no banco de dados')
})

db.once('Open', () => {
    console.log('Conectato no bando de dados')
})

app.use('/', linkRouters)

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

app.listen(PORT, () => {
    console.log(`Server on port: ${PORT}`)
})
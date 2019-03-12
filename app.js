const express = require('express');
var app = express();
var path = require('path');

app.use('/public',express.static('public'));

function pet(name, age, type){
    this.name = name;
    this.age = age;
    this.type = type;
}

let data = new pet(
    "Spot",
    3,
    "dog");

app.get('/', (req, res) => {
 res.sendFile(path.join(__dirname + '/hello.html'))
});

app.get('/data', (req, res) => {
    res.json(data)
   });

app.get('/info', (req, res) => {
    res.sendFile(path.join(__dirname + '/cat.html'))
});

app.get('/pictures', (req, res) => {
    res.sendFile(path.join(__dirname + '/pictures.html'))
});

app.listen(process.env.PORT || 8080)
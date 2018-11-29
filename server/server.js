const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/users', (req, res) => {
    res.send([{
        name: 'Larry',
        age: 50
    }, {
        name: 'Lori',
        age: 48
    }, {
        name: 'Emily',
        age: 15
    }, {
        name: 'Sophia',
        age: 12
    }]);
});

app.listen(3000);
module.exports.app = app;

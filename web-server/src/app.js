const express = require('express');

const app = express();


app.get('', (request, response) => {
    response.send('<h1>Weather</h1>')
})

app.get('/help', (request, response) => {
    response.send([{
        name: 'Diego',
        age: 33
    },
    {
        name: 'Daniele',
        age: 32
    }])
})

app.get('/about', (request, response) => {
    response.send('<h1>Diego</h1> <h2>Daniele</h2>')
})

app.get('/weather', (request, response) => {
    response.send({
        forecast: '50 graus',
        location: 'Rio de Janeiro'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
})

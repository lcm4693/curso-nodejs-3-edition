const path = require('path')
const express = require('express');

const hbs = require('hbs')

// console.log(__dirname)
// console.log(__filename)

const app = express();

const publicDirectoryPath = path.join(__dirname, '../public')

// Customizing the folder for views
const viewsPath = path.join(__dirname, '../templates/views')

const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Define public directory for Express use to find static resources
app.use(express.static(publicDirectoryPath))

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Lívia de Melo'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        message: 'It\'s a page for help you',
        name: 'Lívia de Melo'
    })
})

app.get('', (request, response) => {
    response.render('index', {
        title: 'Weather App',
        name: 'Lívia de Melo'
    })
})

//Após colocar o arquivo index.html, ele é chamado automaticamente
//através do express.static
// app.get('', (request, response) => {
//     response.send('<h1>Weather</h1>')
// })

// app.get('/help', (request, response) => {
//     response.send([{
//         name: 'Diego',
//         age: 33
//     },
//     {
//         name: 'Daniele',
//         age: 32
//     }])
// })
// app.get('/about', (request, response) => {
//     response.redirect('about.html')
// })

app.get('/weather', (request, response) => {
    response.send({
        forecast: '50 graus',
        location: 'Rio de Janeiro'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
})

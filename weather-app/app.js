const request = require('request')

const url = 'https://api.darksky.net/forecast/2bd846fc9e12199c1ed1456aba205490/37.8267,-122.4233'

request({url: url}, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data.currently);
})

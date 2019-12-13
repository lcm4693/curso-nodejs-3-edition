const https = require('https')

const url = 'https://api.darksky.net/forecast/2bd846fc9e12199c1ed1456aba205490/40,-75';

const request = https.request(url, (response)=> {

    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString();
    })
    
    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body);
    })

    response.on('error', (error) => {
        console.log('An error ', error)
    })

})

request.end()
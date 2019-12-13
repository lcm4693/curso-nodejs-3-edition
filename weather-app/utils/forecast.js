const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/2bd846fc9e12199c1ed1456aba205490/' + latitude + ',' + longitude;
    
    // const parameters = '?units=si&lang=pt';
    // const urlFinal = url + parameters;

    request({ url, json: true }, (error, { body }) => {
        if(error){
            callback('Unable to connect to Weather service', undefined);
        }else if(body.error){
            callback('Unable to find location on Weather service', undefined);
        }else{
            const currently = body.currently;
            const retorno = body.daily.data[0].summary + ' It\'s currently ' + currently.temperature + ' degrees out. There is a ' + currently.precipProbability + '% chance of rain.';
            callback(undefined, retorno);
        }
    })
}

module.exports = forecast;




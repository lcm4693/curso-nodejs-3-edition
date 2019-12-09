const request = require('request')

const url = 'https://api.darksky.net/forecast/2bd846fc9e12199c1ed1456aba205490/37.8267,-122.4233';
const parameters = '?units=si&lang=pt';

const urlFinal = url + parameters;

request({ url: urlFinal, json: true }, (error, response) => {
    if(error){
        console.log('Unable to connect to Weather service');
    }else if(response.body.error){
        console.log('There was an error to the Weather service');
    }else{
        const currently = response.body.currently;
        console.log(response.body.daily.data[0].summary + ' It\'s currently ' + currently.temperature + ' degrees out. There is a ' + currently.precipProbability + '% chance of rain.')
    }
})

const city = 'marseille';
const urlMaps = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + city +'.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoibGNtNDY5MyIsImEiOiJjazN5bjliMWMwMDEyM2ZxaXo0ajlkMm1wIn0.DBDJv8C8RXaedQaUmV2dOg&limit=3';

// console.log(urlMaps);

request({ url: urlMaps, json: true }, (error, response) => {

    if(error){
        console.log('Unable to connect to GeoCode service');
    }else if(response.body.message){
        console.log('There was an error to GeoCode service');
    }else if(response.body.features.length === 0){
        console.log('City '+ city +' not found');
    }else{
        const result = response.body.features[0];
        const longitude = result.center[0];
        const latitude = result.center[1];
    
        // console.log(latitude, longitude);
        console.log(result.place_name + ' is in latitude ' + latitude +  ' and longitude ' + longitude);
    }
});
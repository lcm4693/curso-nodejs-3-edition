const request = require('request');
const yargs = require('yargs')

const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

if(yargs.argv.city){
    geocode(yargs.argv.city, (error, data) => {
        if(error){
            return console.log(error);
        }
    
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if(error){
                return console.log('Error', error)
            }
            
            console.log('Location: ' + data.location);
            console.log(forecastData)
        });
    })
}else{
    console.log('No city provided');
}
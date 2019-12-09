const request = require('request')

const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

geocode('Boston', (error, data) => {
    if(error){
        console.log(error);
    }else{
        console.log(data);

    }
})

forecast(-75.7088, 44.1545, (error, data) => {
    if(error){
        console.log('Error', error)
    }else{
        console.log('Data', data)
    }
});




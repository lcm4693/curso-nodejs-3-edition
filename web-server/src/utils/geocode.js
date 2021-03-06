const request = require('request')

const geocode = (address, callback) => {
    const limit = '&limit=3';

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoibGNtNDY5MyIsImEiOiJjazN5bjliMWMwMDEyM2ZxaXo0ajlkMm1wIn0.DBDJv8C8RXaedQaUmV2dOg'+limit;

    request({ url, json: true}, (error, { body }) => {
        if(error){
            callback('Unable to connect to GeoCode service', undefined);
        }else if(body.message){
            callback('There was an error to GeoCode service', undefined);
        }else if(body.features.length === 0){
            callback('Unable to find "' + address + '". Try another search.', undefined);
        }else{
            callback(undefined, {
                location: body.features[0].place_name,
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0]
            })
        }
    });
}

module.exports = geocode;
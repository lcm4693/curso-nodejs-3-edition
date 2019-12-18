console.log('Client side Javascript file is loaded!')

fetch('http://localhost:3000/weather?address=Paris, França').then((response) => {
    response.json().then((data) => {
        if(data.error){
            return console.log(data.error)
        }
        console.log(data.forecast);
        console.log(data.location);
    });
})
// setTimeout(() => {
//     console.log('Two seconds are up');
// }, 2000);

// const geocode = (address, callback) => {
    
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0,
//             address: address
//         }
        
//         callback(data)
//     }, 2000);
// }

// geocode('Filadélfia', (data)=>{
//     console.log(data)
// });

// const add = (number1, number2, callback) => {
//     setTimeout(()=>{
//         const soma = number1 + number2
//         callback(soma)
//     } ,2000);
// }

// add(1, 4, (sum) => {
//     console.log(sum) // Should print: 5
// })

const doWorkCallback = (callback) => {
    setTimeout(() => {
        //callback('This is my error', undefined);
        callback(undefined, [1,4,7])
    }, 2000);
}

doWorkCallback((error, result) => {
    if(error){
        return console.log(error);
    }

    return console.log(result);
});
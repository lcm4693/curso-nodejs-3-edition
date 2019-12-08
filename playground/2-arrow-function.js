// const square = function (x) {
//     return x * x;
// }

// const square = (x) => {
//     return x*x ;
// }

const square = (x) => x * x;

console.log(square(3));

// const event = {
//     name: 'Birthday Party',
//     printGuestList: function (){
//         console.log ('Gust List for ' + this.name);
//     }
// }

const event = {
    name: 'Birthday Party',
    guestList: ['Diego', 'Daniele', 'Livia', 'Geovanna'],
    printGuestList(){
        console.log('Gust List for ' + this.name);
        this.guestList.forEach((guest) => {
            //Tive que usar uma arrow function para pegar o escopo do método printGuestList,
            //sem isso o this. não funciona
            console.log(guest + ' is attending for ' + this.name);
        });
    }
    
}

event.printGuestList();
// const person = {
//     name: 'Mani',
//     age: 27,
//     location: {
//         city: 'NY',
//         temp: 21
//     }
// };

// // const name = person.name;
// // const age = person.age;

// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}.`);


// const {city, temp: temperature} = person.location;
// if (city && temperature){
//     console.log(`It's ${temperature} in ${city}.`);
// }



// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const{name:publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);


const address = ['102 Harrison ave', 'Harrison'];

const [, city, state = 'NY'] = address;

console.log(`You are in ${city} ${state}.`);





const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [name, , price] = item;

console.log(`A medium ${name} costs ${price}`);
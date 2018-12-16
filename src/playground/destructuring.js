// const person = {
//   name: "Mathew",
//   age: 28,
//   location: {
//     city: "Nowy York",
//     temp: 29
//   }
// };

// const { name, age, location } = person;

// console.log(`${name} is ${age} years old`);

// const { city, temp } = person.location;

// if (city && temp) {
//   console.log(`It's ${temp} in ${city}`);
// }

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// };

// const { name: publisherName = "Annoymous" } = book.publisher;

// if (publisherName === "Penguin") {
//   console.log(publisherName);
// } else {
//   console.log(publisherName);
// }

// const adress = [
//   "Stefana Zeromskiego 15",
//   "Szczytno",
//   "warminsko-mazurskie",
//   "12-100"
// ];

// const [, town = "Warszawa"] = adress;

// console.log(`You are in ${town}`);

const item = ["Cofee (hot)", "$2.00", "$2.50", "$3.00"];

const [coffe, price1, price2, price3] = item;

console.log(`A medium ${coffe} costs ${price2}`);

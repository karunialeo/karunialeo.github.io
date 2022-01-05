// Variables
let firstName = "Karunia Leo"
let lastName = "Gultom"
let age = 24

// console.log(firstName);
// console.log(lastName);

let fullName = `My name is ${firstName} ${lastName}.\nI am ${age} years old.`

function getData(day, year) {
    console.log(fullName);
    console.log(`Today is ${day} in year ${year}`)
}

getData("Friday", 2021)

function sum(a, b) {
    let result = a + b
    console.log(`${a} + ${b} = ${result}`);
}

sum(23, 35)
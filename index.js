console.log('Hello World');
// lET ALLOWS FOR VARIABLES TO BE CHANGED LATER IN THE CODE
let interestRate = 0.3;
console.log(interestRate);
interestRate = 1;
console.log(interestRate);

let person = {
    name: 'Sam',
    age: 24
};

// Dot notation (preferred choice for object notation)

person.name = 'James';
console.log(person.age);
console.log(person.name);

// Bracket Notation
person['name'] = 'Mary';

console.log(person);
console.log(typeof(person));


let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors);

// Using indexing to access array in JavaScript
console.log(selectedColors[1]);
console.log(selectedColors.length);


// Performing a task
const greet = (firstName, lastName) => {
    // Body of the function
    console.log(`Hello ${firstName} ${lastName}, how are you?`);
}

// Function that calculates a value
const square = (number) => {
    return number * number;
    
}

greet('Sam', 'Townsend');
let number = square(2);

console.log(number);

// OOP(OBJECT ORIENTED PROGRAMING)

let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

const getWage = (baseSalary, overtime, rate) => {
    return baseSalary + (overtime * rate);
}

console.log(getWage());
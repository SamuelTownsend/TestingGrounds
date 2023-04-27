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

// Dot notation

person.name = 'James';
console.log(person.age);
console.log(person.name);

// Bracket Notation
person['name'] = 'Mary';

console.log(person);
console.log(typeof(person));
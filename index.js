let bus = '2';
console.log(bus);
//can use single or double quotes for declaring string in JS. More common to use single quote

//Rules
//1. cannot be reserved keyword
//2. should be meaningful (should not be x)
//3. cannot start with a number (eg 1name)
//4. cannot contain a space or hyphen(-)
//5. are case sensitive
//channel notation - eg firstName - the first letter of the first word is small letter and the first letter of second word is capital letter
let firstName = 'PC'
console.log('PC')

//the value of a variable can change but the value of a constant cannot change

//primitive value type given below
let name = 'PC'; //String literal
let age = 20; //number literal
let isApproved = false; //Boolean literal
let secondName = undefined;
let selectedColor = null;

//JS is a dynamic language. The type can be changed later on.

let person = {
    name: 'PC',
    age: 20
}
console.log(person)

//Access a property - 2 ways
//1. dot notation
person.name = 'John'
console.log(person.name)
//2. bracket notation
person['name'] = 'Marry';
console.log(person.name)
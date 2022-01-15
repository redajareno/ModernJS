/* DATATYPE - STRINGS
// strings
console.log('hello, world');

let email = 'reno@email.com';
console.log(email);

// string concatenation
let firstName = 'Reno';
let lastName = 'Redaja';
let fullName = firstName + ' ' + lastName;
console.log(fullName);

// getting characters
console.log(fullName[0]);

// string length
console.log('Full Name Length:', fullName.length);

// string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('@');
console.log(index);

// common string methods
let email = 'reno@gmail.com';

// let result = email.lastIndexOf('m');
// let result = email.slice(0, 4); // notes: SPLICE() - includes everything before the actual index
// let result = email.substr(0,4);
let result = email.replace('@', '!');

console.log(result);
*/


/* DATATYPE - NUMBERS
// OPERATORS +, -, *, /, **, %
let radius = 10;
const pi = 3.14;

// console.log(radius, pi);
// console.log(10 / 2);
// let result = radius % 3;
// let result = pi * radius**2; // area = pi * r^2

// ORDER OF OPERATION - P E M D A S

// console.log(result);

let likes = 10;
// likes++;
// likes--;
// likes += 10; // 20
// likes -= 5; // 5
// likes *= 2; // 20
// likes /= 2; // 5
// console.log(likes);

// NaN - not a number
*/

/*
// template strings
const title = 'Best reads of 2022';
const author = 'Reno';
const likes = 30;

// concatenation way
// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes.';
// console.log(result);

// template string way
let result = `The blog called ${title} by ${author} has ${likes} likes.`;
console.log(result);

// create html templates
let html = `
    <h2>${title}</h2>
    <p>${author}</p>
    <span> This blog has ${likes} likes.</span>
`;
console.log(html);
*/

/* ARRAYS
let ninjas = ['shaun', 'ryu', 'chun-li'];
let pirates = ['luffy', 'zorro']

// ninjas[1] = 'ken';
// console.log(ninjas[1]);

// let ages = [20, 25, 30, 35];
// console.log(ages[2]);

// let random = ['shaun', 'crystal', 30, 20];
// console.log(random);

// array methods
// let result = ninjas.join('-');
// let result = ninjas.indexOf('chun-li');
// let result = ninjas.concat(pirates);
let result = ninjas.push('ken'); // returns length of array
result = ninjas.pop(); // remove last element
console.log(result);
*/

/* NULL & UNDEFINED
// let age; // auto undefined with no value
let age = null; // null is 0;
console.log(age, age + 3, `the age is ${age}`); 
*/

/* BOOLEANS
// booleans & comparisons
console.log(true, false, 'true', 'false');

// methods can return booleans
let email = 'momo@email.com';
let names = ['reno', 'momo', 'tina'];

// let result = email.includes('!');
// let result = names.includes('reno');
// console.log(result);

// comparison operators
let age = 29;

// console.log(age == 29); // t
// console.log(age == 30); // f
// console.log(age != 29); // f
// console.log(age > 20); // t
// console.log(age < 20); // f

let name = 'reno';

console.log(name == 'reno');
console.log(name == 'Reno');
console.log(name > 'crystal'); // t, compares first index between other index
*/

/* LOOSE VS STRICT COMPARISON
let age = 29;

// loose comparison (diff types can still be equal)
// console.log(age == 29);
// console.log(age == '29');
// console.log(age != 29);
// console.log(age != '29');

// strict comparison (diff types cannot be equal)
console.log(age === 29);
console.log(age === '29');
console.log(age !== 29);
console.log(age !== '29');
*/

/*
// TYPE CONVERSION
let score = '100';

// score = Number(score); // convert string to number
// console.log(score + 1);
// console.log(typeof(score));

// explicit type conversion
// let result = Number('hello');
// let result = String(50);
// let result = Boolean(0); // false, falsey value

console.log(result, typeof(result));
*/
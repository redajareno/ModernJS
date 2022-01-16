/* FUNCTION DECLARATIONS
// function declaration
// JS only hoists function declarations...
function greet() {
  console.log('hello');
}

// function expression
const speak = function() {
  console.log('buenos dias'); 
};

greet();

speak();
*/

/* ARGUMENTS & PARAMETERS
const speak = function(name = 'reno', age = '29') {
  console.log(`buenos dias ${name} you are ${age} years old.`); 
};

speak('momo', 2);
speak(); // with default values
*/

/* RETURNING VALUES
const calcArea = function(radius) {
  return 3.14 * radius**2;
}

const area = calcArea(100);
console.log(area);
*/

/* ARROW FUNCTION
const greet = () => 'hello world';
let hi = greet();
console.log(hi);

const bill = (products, tax) => {
  let total = 0;
  
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }

  return total;
}

console.log(bill([10, 15, 30], 0.2));
*/

/* FUNCTIONS VS METHODS
const firstName = 'shaun';
// functions
const greet = () => 'hello'; 
let resultOne = greet();
console.log(resultOne);

// methods
let resultTwo = firstName.toUpperCase();
console.log(resultTwo);
*/

/* CALLBACKS & FOREACH
// const myFunc = (callbackFunc) => {
//   // do something
//   let value = 50;
//   callbackFunc(value);
// };

// myFunc(value => {
//   // do something
//   console.log(value);
// });

// foreach
let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const logPerson = (person, index) => {
  console.log(`${index} - hello ${person}`)
}

people.forEach(logPerson);
*/

// CALLBACK FUNCTIONS IN ACTION
// get a reference to the 'ul'
const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

people.forEach(function(person){
  // create html template
  html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;
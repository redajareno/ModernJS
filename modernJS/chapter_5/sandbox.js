// OBJECT LITERALS
let user = {
    name: 'reno',
    age: '30',
    email: 'reno@email.com',
    location: 'Hawaii',  
    blogs: [
        { title: 'why loco moco is mean', likes: 30 },
        { title: '10 ways to fish', likes: 50 },
    ],
    login() {
        console.log('user logged in');
    },
    logout() {
        console.log('user logged out');
    },
    logBlogs() {
        // console.log(this.blogs);
        console.log('this user has written the following blogs: ');
        this.blogs.forEach(blogs => {
           console.log(blogs.title, blogs.likes); 
        });
    }
};

user.logBlogs();

// MATH OBJECT
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 8.4;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// random numbers
const random = Math.random();
console.log(random);
console.log(Math.round(random * 100));

// PRIMITIVE & REFERENCE TYPES
/*
* Primitive:
* numbers
* strings
* Booleans
* null
* undefined
* symbols
*/

// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);
// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

/*
* Reference:
* All types of objects
*   - object literals
*   - arrays
*   - functions
*   - dates
*   - all other objects
*/

const userOne = { name: 'reno', age: 29 };
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 30;

console.log(userOne, userTwo);

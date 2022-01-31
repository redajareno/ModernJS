/*
// QUERY SELECTOR
// const para = document.querySelector('body > h1');
// console.log(para);

const paras = document.querySelectorAll('p'); // select all 'p' elements in the html doc
const errors = document.querySelectorAll('.error'); // select all '.error' elements in the html doc

// FOR EACH LOOP ON NODE LISTS
// paras.forEach(para => {
//     console.log(para);
// });

console.log(errors);
*/

/*
// GET ELEMENT BY ID
const title = document.getElementById('page-title');
console.log(title);

// GET ELEMENT BY CLASS NAME
const errors = document.getElementsByClassName('error');
console.log(errors);
console.log(errors[0]);

// GET ELEMENT BY TAG NAME
const paras = document.getElementsByTagName('p');
console.log(paras);
*/

/*
// ADDING & CHANGING PAGE CONTENT
const para = document.querySelector('p');
// console.log(para.innerText);
// para.innerText = 'howzzit'; // inner text of property overwrites

const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' new text'; // add or chagne text of 'p' property
// });

const content = document.querySelector('.content');
// console.log(content.innerHTML); // grabs inner html tag inside the content div
// content.innerHTML += '<h2>this is a new H2 tag</h2>';

const people = [ 'tina', 'reno', 'momo' ];
people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});
*/

/*
// GETTING & SETTING ATTRIBUTES
const link = document.querySelector('a');
console.log(link.getAttribute('href')); // get attribute value of 'href'
link.setAttribute('href', 'https://www.youtube.com');
link.innerText = 'Youtube!';

const msg = document.querySelector('p');
console.log(msg.getAttribute('class')); // get attribute value of 'class'
msg.setAttribute('class', 'success'); // set attribute value of 'class' from error to success
msg.setAttribute('style', 'color: green'); // set attribute value of 'style' to color green
*/

/*
// CHANGING CSS STYLES
const title = document.querySelector('h1');
// title.setAttribute('style', 'margin: 50px;'); 
console.log(title.style);
console.log(title.style.color);

title.style.margin = '50px';
title.style.color = 'crimson';
title.style.fontSize = '60px';
title.style.margin = '';
*/

/*
// ADDING & REMOVING CLASSES
// const content = document.querySelector('p');
// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

const content = document.querySelectorAll('p');
content.forEach( p => {
    if (p.textContent.includes('error')) {
        p.classList.add('error');
    } else if (p.textContent.includes('success')) {
        p.classList.add('success');
    } else {
        console.log('contains no error or success');
    }
});

const title = document.querySelector('.title');
title.classList.toggle('test'); // add 'test' to class
title.classList.toggle('test'); // removes 'test' added to class 
*/

/*
// PARENTS, CHILDRENS, & SIBLINGS
const article = document.querySelector('article');
// console.log(article.children);
// console.log(Array.from(article.children)); // convert HTMLCollection to Array since cannot use for each loop in HTMLCollection
// Array.from(article.children).forEach(child => {
//     child.classList.add('article-element');
// });

const title = document.querySelector('h2');
console.log(title.parentElement); // get parent element
console.log(title.parentElement.parentElement); 
console.log(title.nextElementSibling); // get sibling element
console.log(title.previousElementSibling); // get sibling element

// chaining
console.log(title.nextElementSibling.parentElement.children);
*/

/*
// EVENT BASICS (CLICK EVENTS), CREATE & REMOVE ELEMENTS
// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//     console.log('clicked me');
// });

const ul = document.querySelector('ul');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'something new to do';
    // ul.append(li); // insert node after last child
    ul.prepend(li); // insert node before first child
});

// const items = document.querySelectorAll('li');

// items.forEach(item => {
//     item.addEventListener('click', e => {
//         // e.target.style.textDecoration = 'line-through'; // add line through style in element
//         e.target.remove(); // remove element 
//         e.stopPropagation();
//         console.log('event in LI');
//     });
// });

ul.addEventListener('click', e => {
    // console.log('event in UL');
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});
*/

/*
// MORE DOM EVENTS
const copy = document.querySelector('.copy-me');
copy.addEventListener('copy', () => {
    console.log('OI! my content');
});

const box = document.querySelector('.box');
box.addEventListener('mousemove', e => {
    // console.log(e);
    // console.log(e.offsetX, e.offsetY);
    box.textContent = `x pos - ${e.offsetX}  y pos - ${e.offsetY}`;
});

document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY);
});
*/

// BUILDING A POPUP
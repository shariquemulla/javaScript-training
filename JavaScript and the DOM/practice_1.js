// select the element that have the id "header"
document.getElementById('header');
document.getElementById('footer');

// select all elements that have the class "accent-color"
document.getElementsByClassName('accent-color');

// select all "span" elements
document.getElementsByTagName('span');

// Write the DOM code to select the element with ID strawberry-banner.
document.getElementById('strawberry-banner')

// select the element with the ID "callout"
document.getElementById('callout');

// Write the DOM code to select all <article> elements.
document.getElementsByTagName('article')

// Write the DOM code to select all elements with class: fancy-footer.
document.getElementsByClassName('fancy-footer')


/******************************************************************************************/


// find and return the element with an ID of "header"
document.querySelector('#header');

// find and return the first element with the class "header"
document.querySelector('.header');

// find and return the first <header> element
document.querySelector('header');

// Write the .querySelector() code to find the first item with an ID of: fanciful-butterfly.
document.querySelector('#fanciful-butterfly')

// Write the .querySelector() code to find the first paragraph element that also has a class of: callout
document.querySelector('.callout');

// find and return a list of elements with the class "header"
document.querySelectorAll('.header');

// find and return a list of <header> elements
document.querySelectorAll('header');

// Write the .querySelectorAll() code to find all paragraph elements that are descendents of elements that have the class: articles
document.querySelectorAll('.articles p')

// find and return the element with an ID of "header"
document.querySelector('#header');

// find and return a list of elements with the class "header"
document.querySelectorAll('.header');

// Write the DOM code necessary to select the first element with class: card
document.querySelector('.card')


/******************************************************************************************/


/**
 *  <h1 id="pick-me">Greetings To <span>All</span>!</h1>
 */

const innerResults = document.querySelector('#pick-me').innerHTML;
console.log(innerResults); // logs the string: "Greetings To <span>All</span>!"

const outerResults = document.querySelector('#pick-me').outerHTML;
console.log(outerResults); // logs the string: "<h1 id="pick-me">Greetings To <span>All</span>!</h1>"


/******************************************************************************************/


const myPara = document.createElement('p');
const textOfParagraph = document.createTextNode('I am the text for the paragraph!');

myPara.appendChild(textOfParagraph);
document.body.appendChild(myPara);

/**
 *  However, since you already know about the .textContent property, the code below will provide the exact same result:
 */

const myPara = document.createElement('p');

myPara.textContent = 'I am the text for the paragraph!';
document.body.appendChild(myPara);


/***********************************************************************************************/


// Remove without parent element reference
const mainHeading = document.querySelector('h1');
mainHeading.parentElement.removeChild(mainHeading);

const mainHeading = document.querySelector('h1');
mainHeading.remove();


/*************************************************************************************************/


const mainHeading = document.querySelector('h1');
mainHeading.style.color = 'red';

const header6 = document.querySelector('h6');
a.style.color = 'orange'
a.style.font = '2em'

const mainHeading = document.querySelector('h1');
mainHeading.style.color = 'blue';
mainHeading.style.backgroundColor = 'orange';
mainHeading.style.fontSize = '3.5em';

const mainHeading = document.querySelector('h1');
mainHeading.style.cssText = 'color: blue; background-color: orange; font-size: 3.5em';


/**************************************************************************************************/


const mainHeading = document.querySelector('h1');
mainHeading.setAttribute('style', 'color: blue; background-color: orange; font-size: 3.5em;');


const mainHeading = document.querySelector('h1');

// add an ID to the heading's sibling element
mainHeading.nextElementSibling.setAttribute('id', 'heading-sibling');

// use the newly added ID to access that element
document.querySelector('#heading-sibling').style.backgroundColor = 'red';


/**************************************************************************************************/


const mainHeading = document.querySelector('#main-heading');

// store the list of classes in a variable
const listOfClasses = mainHeading.className;

// logs out the string "ank-student jpk-modal"
console.log(listOfClasses);

const arrayOfClasses = listOfClasses.split(' ');

// logs out the array of strings ["ank-student", "jpk-modal"]
console.log(arrayOfClasses);


/**************************************************************************************************/


const mainHeading = document.querySelector('#main-heading');

// store the list of classes in a variable
const listOfClasses = mainHeading.classList;

// logs out ["ank-student", "jpk-modal"]
console.log(listOfClasses);


/*************************************************************************************************/



const mainHeading = document.querySelector('h1');

mainHeading.addEventListener('click', function () {
  console.log('The heading was clicked!');
});


/****************************************************************************************************/


document.addEventListener('click', function () {
    const heading = document.querySelector('h1');
    heading.style.backgroundColor='red'
})


/***************************************************************************************************/


function myEventListeningFunction() {
  console.log('howdy');
}

// adds a listener for clicks, to run the `myEventListeningFunction` function
document.addEventListener('click', myEventListeningFunction);

// immediately removes the click listener that should run the `myEventListeningFunction` function
document.removeEventListener('click', myEventListeningFunction);


/**************************************************************************************************/

/**
 *  Which event listener will fire first when the page is clicked? 
 *  - body - because of the bubbling phase
 */ 

document.addEventListener('click', function () {
  console.log('The document was clicked');
});

document.body.addEventListener('click', function () {
   console.log('The document body was clicked');
});


/**************************************************************************************/

// Capturing phase
document.addEventListener('click', function () {
  console.log('The document was clicked');
}, true);


// Bubbling phase
const items = document.querySelectorAll('.quizzing-quizzes');
const el = items[1];

el.addEventListener('click', function () {
    console.log('You clicked on the 2nd quizzing-quizzes item!');
}, false);


/*******************************************************************************************/

// 200 event listeners
const myCustomDiv = document.createElement('div');

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    newElement.addEventListener('click', function respondToTheClick() {
        console.log('A paragraph was clicked.');
    });

    myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);


// Refractored
const myCustomDiv = document.createElement('div');

function respondToTheClick() {
    console.log('A paragraph was clicked.');
}

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    newElement.addEventListener('click', respondToTheClick);

    myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);


// moved listeners to div
const myCustomDiv = document.createElement('div');

function respondToTheClick() {
    console.log('A paragraph was clicked.');
}

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    myCustomDiv.appendChild(newElement);
}

myCustomDiv.addEventListener('click', respondToTheClick);

document.body.appendChild(myCustomDiv);


/****************************************************************************************/


// individual paragraph element access using event.target
const myCustomDiv = document.createElement('div');

function respondToTheClick(evt) {
    console.log('A paragraph was clicked: ' + evt.target.textContent);
}

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);

myCustomDiv.addEventListener('click', respondToTheClick);


/***************************************************************************************/


<article id="content">
  <p>Brownie lollipop <span>carrot cake</span> gummies lemon drops sweet roll dessert tiramisu. Pudding muffin <span>cotton candy</span> croissant fruitcake tootsie roll. Jelly jujubes brownie. Marshmallow jujubes topping sugar plum jelly jujubes chocolate.</p>

  <p>Tart bonbon soufflé gummi bears. Donut marshmallow <span>gingerbread cupcake</span> macaroon jujubes muffin. Soufflé candy caramels tootsie roll powder sweet roll brownie <span>apple pie</span> gummies. Fruitcake danish chocolate tootsie roll macaroon.</p>
</article>

/** 
 * In this filler text, notice that there are some <span> tags. 
 * If we want to listen to the <article> for a click on a <span>, you might think that this would work:
 */

document.querySelector('#content').addEventListener('click', function (evt) {
    console.log('A span was clicked with text ' + evt.target.textContent);
});

/**
 * This will work, but there's a major flaw. 
 * The listener function will still fire when either one of the paragraph elements is clicked, too!
 * In other words, this listener function is not verifying that the target of the event is actually a <span> element. 
 * Let's add in this check:
 */
document.querySelector('#content').addEventListener('click', function (evt) {
    if (evt.target.nodeName === 'SPAN') {  // ← verifies target is desired element
        console.log('A span was clicked with text ' + evt.target.textContent);
    }
});


/*******************************************************************************************/


// DOMContentLoaded Event
document.addEventListener('DOMContentLoaded', function () {
    console.log('the DOM is ready to be interacted with!');
});



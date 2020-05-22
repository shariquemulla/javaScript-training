const card = document.querySelector('.card');
card.textContent = 'hi';

// create a brand new <span> element
const newSpan = document.createElement('span');
newSpan.textContent = ", right now!"

// select the first (main) heading of the page
const mainHeading = document.querySelector('h1');

// add the <span> element as the last child element of the main heading
mainHeading.appendChild(newSpan);



const cardDiv = document.querySelector('.hero__module');

var firstCard = cardDiv.firstElementChild
cardDiv.removeChild(firstCard)
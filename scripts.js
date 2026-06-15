/**** DOM METHODS ****/

/** DECLARE ANY GLOBAL VARIABLES NEEDED FOR REUSE **/

const BASE_COLOR = 'rgb(34, 34, 34)';

/** GENERATE HTML FOR PAGE */

// Access element where boxes should be added
const boxGrid = document.getElementById('box-grid');

// Boxes inside grid generated dynamically
for (let row = 0; row < 5; row++) {
	const rowElement = document.createElement('div');
	rowElement.className = 'box-row';

	for (let column = 0; column < 5; column++) {
		const box = document.createElement('div');
		box.className = `box row${row} column${column}`;
		rowElement.appendChild(box);
	}

	boxGrid.appendChild(rowElement);
}

// Add ids to two of the generated boxes
document.querySelector('.row1.column1').id = 'specific-box';
document.querySelector('.row2.column2').id = 'center-box';

/** CREATE OBJECTS THAT REPRESENT HTML ELEMENTS **/

// 
const specificBoxButton = document.getElementById('specific-box-button');
const column3Button = document.getElementById('column3-button');
const allBoxesButton = document.getElementById('all-boxes-button');
const h3Button = document.getElementById('h3-button');
const h3AllButton = document.getElementById('h3-all-button');
// TODO: Create an object to represent the element with id "center-button"
// TODO: Create an object to represent the element with id "row0-button"

// Follow the directions on the page to create objects for all
// the elements to be manipulated

// ...using .getElementById
let specificBox = document.getElementById('specific-box'); // NO hash symbol

// ...using .getElementsByClassName
let column3Boxes = document.getElementsByClassName('column3'); // NO period
let allBoxes = document.getElementsByClassName('box');

// ...using .querySelector and .querySelectorAll
let h3Element = document.querySelector('h3');
let h3Elements = document.querySelectorAll('h3');
// TODO: Create an object to represent the element with the id "center-box"
// TODO: Create a list of objects to represent all elements with the class "row0"

/*
    The main difference between the 'get element by' methods 
    and the 'query selector' methods is this:
        - .getElementsByClassName() will get a fresh representation 
        of all objects in the document, even new ones that were added 
        since the object was created.
        - .querySelectorAll() is static and will only ever return the 
        array of elements that it found the first time it was instantiated. 

    So if you use .querySelectorAll in a situation where new elements may 
    have been created, make sure you cache the object inside the 
    listener so it's fresh!
*/

/** EVENT HANDLERS **/

// When the user hovers over the "GET BY ID" button
specificBoxButton.addEventListener('mousedown', () => {
	specificBox.style.backgroundColor = 'rgb(160, 17, 17)';
});
specificBoxButton.addEventListener('mouseup', () => {
	specificBox.style.backgroundColor = BASE_COLOR;
});

// When the user hovers over the orange "GET ALL BY CLASS" button
column3Button.addEventListener('mousedown', () => {
	for (box of column3Boxes) {
		box.style.backgroundColor = 'rgb(206, 79, 6)';
	}
});
column3Button.addEventListener('mouseup', () => {
	for (box of column3Boxes) {
		box.style.backgroundColor = BASE_COLOR;
	}
});

// When the user hovers over the yellow "GET ALL BY CLASS" button
allBoxesButton.addEventListener('mousedown', () => {
	for (box of allBoxes) {
		box.style.backgroundColor = 'rgb(224, 194, 22)';
	}
});
allBoxesButton.addEventListener('mouseup', () => {
	for (box of allBoxes) {
		box.style.backgroundColor = BASE_COLOR;
	}
});

// When the user hovers over the green "QUERY BY TAG" button
h3Button.addEventListener('mousedown', () => {
	h3Element.style.color = 'rgb(91, 153, 9)';
	h3Element.style.fontFamily = "'Architects Daughter', serif";
});
h3Button.addEventListener('mouseup', () => {
	h3Element.style.color = BASE_COLOR;
	h3Element.style.fontFamily = "'Walter Turncoat', sans-serif";
});

// When the user hovers over the blue "QUERY ALL BY TAG" button
h3AllButton.addEventListener('mousedown', () => {
	for (element of h3Elements) {
		element.style.color = 'rgb(18, 91, 175)';
		element.style.fontFamily = "'Architects Daughter', serif";
	}
});
h3AllButton.addEventListener('mouseup', () => {
	for (element of h3Elements) {
		element.style.color = BASE_COLOR;
		element.style.fontFamily = "'Walter Turncoat', sans-serif";
	}
});

// TODO: Change the color of the box with the "center-box" id to match
// the purple "QUERY BY ID" button, and make sure it changes back

// TODO: Change the color of all boxes in row0 to match the pink 
// "QUERY ALL BY CLASS" button, and make sure they change back

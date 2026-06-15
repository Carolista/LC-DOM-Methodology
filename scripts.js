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

// Buttons user will interact with
// DEMO: Create an object to represent the element with id "specific-box-button"
// DEMO: Create an object to represent the element with id "column3-button"
// DEMO: Create an object to represent the element with id "all-boxes-button"
// DEMO: Create an object to represent the element with id "h3-button"
// DEMO: Create an object to represent the element with id "h3-all-button"
// TODO: Create an object to represent the element with id "center-button"
// TODO: Create an object to represent the element with id "row0-button"

// Follow the directions on the page to create objects for all
// the elements to be manipulated

// ...using .getElementById
// DEMO: Create an object to represent the element with the id ""

// ...using .getElementsByClassName
// DEMO: Create a list of objects to represent all elements with the class "column3"
// DEMO: Create a list of objects to represent all elements with the class "box"

// ...using .querySelector and .querySelectorAll
// DEMO: Create an object to represent the first h3 element
// DEMO: Create a list of objects to represent all h3 elements
// TODO: Create an object to represent the element with the id "center-box"
// TODO: Create a list of objects to represent all elements with the class "row0"

/** EVENT HANDLERS **/

// DEMO: Change the color of the box with the "specific-box" id to match
// the red "GET BY ID" button, and make sure it changes back

// DEMO: Change the color of all boxes in column3 to match the orange 
// "GET ALL BY CLASS" button, and make sure they change back

// DEMO: Change the color of all boxes to match the yellow 
// "GET ALL BY CLASS" button, and make sure they change back

// DEMO: Change the color of first h3 element to match the green
// "QUERY BY TAG" button, and make sure it changes back

// DEMO: Change the color of both h3 elements to match the blue
// "QUERY ALL BY TAG" button, and make sure they change back

// TODO: Change the color of the box with the "center-box" id to match
// the purple "QUERY BY ID" button, and make sure it changes back

// TODO: Change the color of all boxes in row0 to match the pink 
// "QUERY ALL BY CLASS" button, and make sure they change back

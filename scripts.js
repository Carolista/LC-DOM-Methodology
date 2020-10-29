/*** Other DOM Events ***/

/*
    .getElementById, .querySelector(), getElementsByClassName(), etc.
*/

// Event listener for page load
window.addEventListener("load", function() {
    console.log('Page loaded.');
    init();
});

// DOM code for page elements
function init() {

    /** NON-OBJECT VARIABLES **/

    let baseColor = "rgb(34, 34, 34)";

    /** OBJECTS **/

    // First, let's create objects for all the buttons on the left side of the page
    const specificButton = document.getElementById("specific-button");
    const column3Button = document.getElementById("column3-button");
    const allBoxesButton = document.getElementById("all-boxes-button");
    const h3Button = document.getElementById("h3-button");
    const h3AllButton = document.getElementById("h3-all-button")
    const centerButton = document.getElementById("center-button");
    const row0Button = document.getElementById("row0-button");
    

    // Now let's create objects for all the elements on the right side of the page that will be affected when the user hovers over those buttons
    // ...using .getElementById
    let specificBox = document.getElementById("specific-box");
    // ...using .getElementsByClassName
    let column3Boxes = document.getElementsByClassName("column3");
    let allBoxes = document.getElementsByClassName("box");
    // ...using .querySelector and .querySelectorAll
    let h3Element = document.querySelector("h3");
    let h3Elements = document.querySelectorAll("h3");
    let centerBox = document.querySelector("#center-box"); // notice the octothorpe (hash symbol)
    let row0Boxes = document.querySelectorAll(".row0"); // notice the period

    /*
        The main difference between the 'get element by' methods and the 'query selector' methods is this:
            - .getElementsByClassName() will get a fresh representation of all objects in the document, even new ones that were added since the object was created.
            - .querySelectorAll() is static and will only ever return the array of elements that it found the first time it was instantiated. 
        So if you use .querySelectorAll, make sure you instantiate the object inside the listener so it's fresh!
    */

    /** EVENT HANDLERS **/

    // When the user hovers over the "GET BY ID" button
    specificButton.addEventListener("mouseover", function() {
        specificBox.style.backgroundColor = "rgb(160, 17, 17)";
    });
    specificButton.addEventListener("mouseout", function() {
        specificBox.style.backgroundColor = baseColor;
    });

    // When the user hovers over the orange "GET ALL BY CLASS" button
    column3Button.addEventListener("mouseover", function() {
        for (let i=0; i < column3Boxes.length; i++) {
            column3Boxes[i].style.backgroundColor = "rgb(206, 79, 6)";
        }  
    });
    column3Button.addEventListener("mouseout", function() {
        for (let i=0; i < column3Boxes.length; i++) {
            column3Boxes[i].style.backgroundColor = baseColor;
        } 
    });

    // When the user hovers over the yellow "GET ALL BY CLASS" button
    allBoxesButton.addEventListener("mouseover", function() {
        for (let i=0; i < allBoxes.length; i++) {
            allBoxes[i].style.backgroundColor = "rgb(224, 194, 22)";
        }  
    });
    allBoxesButton.addEventListener("mouseout", function() {
        for (let i=0; i < allBoxes.length; i++) {
            allBoxes[i].style.backgroundColor = baseColor;
        } 
    });

    // When the user hovers over the green "QUERY ONE" button
    h3Button.addEventListener("mouseover", function() {
        h3Element.style.color = "rgb(91, 153, 9)";
        h3Element.style.fontFamily = "'Architects Daughter', serif";
        h3Element.style.marginBottom= "-8px 0px"; // to keep grid from jumping around
    });
    h3Button.addEventListener("mouseout", function() {
        h3Element.style.color = baseColor;
        h3Element.style.fontFamily = "'Walter Turncoat', sans-serif";
        h3Element.style.margin= "0px";
    });

    // When the user hovers over the blue "QUERY ALL" button
    h3AllButton.addEventListener("mouseover", function() {
        for (let i=0; i < h3Elements.length; i++) {
            h3Elements[i].style.color = "rgb(18, 91, 175)";
            h3Elements[i].style.fontFamily = "'Architects Daughter', serif";
            h3Elements[i].style.marginBottom = "-8px 0px"; // to keep grid from jumping around
        }  
    });
    h3AllButton.addEventListener("mouseout", function() {
        for (let i=0; i < h3Elements.length; i++) {
            h3Elements[i].style.color = baseColor;
            h3Elements[i].style.fontFamily = "'Walter Turncoat', sans-serif";
            h3Elements[i].style.margin= "0px";
        } 
    });

    // When the user hovers over the purple "QUERY BY ID" button
    centerButton.addEventListener("mouseover", function() {
        centerBox.style.backgroundColor = "rgb(126, 11, 172)";
    });
    centerButton.addEventListener("mouseout", function() {
        centerBox.style.backgroundColor = baseColor;
    });

    // When the user hovers over the pink "QUERY BY CLASS" button
    row0Button.addEventListener("mouseover", function() {
        for (let i=0; i < column3Boxes.length; i++) {
            row0Boxes[i].style.backgroundColor = "rgb(172, 11, 132)";
        }  
    });
    row0Button.addEventListener("mouseout", function() {
        for (let i=0; i < column3Boxes.length; i++) {
            row0Boxes[i].style.backgroundColor = baseColor;
        } 
    });


}
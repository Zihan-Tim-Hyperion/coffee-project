"use strict"
/**   *** TO DO ***
Add <option>all</option> under <select id="roast-selection"> **PLACE BEFORE LIGHT ROAST; Update JS code--COMPLETE
Add search bar for coffee name --HANNAH
Add "Add a Coffee" feature with roast dropdown and name function, plus submit button **CLONE? --HANNAH
Swap table HTML for div; coffee name h2; roast as p; id as ???; do not display coffee ID; correct JS code to reflect new HTML code
Swap tbody with another div; correct JS code to reflect new HTML code
*/


//Adds all option
function addAllRoast () {
    //Creates new element
    var allOptionTag = document.createElement("option");
    var newAll = document.createTextNode("all");
    allOptionTag.appendChild(newAll);

    //References existing elements to receive new element
    var roastSelection = document.getElementById("roast-selection");
    var lightOption = roastSelection.firstElementChild;

    //Inserts new element into referenced existing element
    roastSelection.insertBefore(allOptionTag, lightOption);
}
addAllRoast();

//Replaces table and contents with divs, p and h2. tbody tag is replaced with h2 --- ***** INCOMPLETE!!! *****
/**
 let replaceTableFunc = function () {
    //creates new div and sets id attribute
    var divContainer = document.createElement("div");
    divContainer.id = "coffeeTableHeader";

    //creates content for new div
    var divContainerContent = ;
    // creates new header elements --- replaces th elements
    var coffeeID = document.createElement("div");
    var coffeeIDContent = document.createTextNode("ID");
    coffeeID.appendChild(coffeeIDContent);
    var coffeeName = document.createElement("h2");
    var coffeeNameContent = document.createTextNode("NAME");
    coffeeName.appendChild(coffeeNameContent);
    var coffeeRoast = document.createElement("p");
    var coffeeRoastContent = document.createTextNode("ROAST");
    coffeeRoast.appendChild(coffeeRoastContent);

    //creates new div for #coffees --- replaces the tbody element
    var coffeesList = document.createElement("div");
    coffeesList.id = "coffees";
    }
    var divContainerContentNode = ();
    //divContainer.appendChild(divContainerContentNode);
     console.log(divContainerContentNode);
     console.log(divContainer);
 }
console.log(replaceTableFunc());
let replaceTable = replaceTableFunc();
console.log(typeof replaceTable);
// designates elements to be replaced
var tableEl = document.getElementsByName("table");
var parentDiv = tableEl.body;
parentDiv.replaceChild(replaceTable, tableEl);

*/
function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<div>' + coffee.id + '</div>';
    html += '<h3>' + coffee.name + '</h3>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if (selectedRoast === "all") {
            filteredCoffees.push(coffee); //returns all coffee types when all is submitted
        }
    });
    coffeesDiv.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var coffeesDiv = document.querySelector('#coffees'); //change tbody to coffeesDiv
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

coffeesDiv.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

"use strict"
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

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var addCoffeeButton = document.querySelector("#submit1");
var roastSelection = document.querySelector('#roast-selection');
var coffeeName = document.getElementById("coffee-name");
tbody.innerHTML = renderCoffees(coffees);
roastSelection.addEventListener('change', selectedCoffee);
coffeeName.addEventListener("keyup",selectedCoffee);
submitButton.addEventListener("click",clickButton);
addCoffeeButton.addEventListener("click", addNewCoffee);

// function renderCoffee(coffee) {
//     var html = '<tr class="coffee">';
//     html += '<td>' + coffee.id + '</td>';
//     html += '<td>' + coffee.name + '</td>';
//     html += '<td>' + coffee.roast + '</td>';
//     html += '</tr>';
//
//     return html;
// }
function renderCoffee(coffee){
   var html ="";
    html += "<div class='d-flex align-items-center coffee-item my-3 mx-3'>" + "<h3 class='hov p-2 mx-2'>" + coffee.name + "</h3>" +
        "<p class='hov my-0 mx-3 p-2 text-muted' >" + coffee.roast + "</p>" + "</div>";
    // var html = "<div class=d-flex align-items-center>" + "<h3>" + coffee.name +"</h3>" + " <p mx-2>" + coffee.roast + "</p>" +"</div>"+"<br>";
    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}



function selectedCoffee(e) {
    e.preventDefault(e);
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (selectedRoast === "all") {
            if (coffee.name.toLowerCase().includes(coffeeName.value.toLowerCase())) {
                filteredCoffees.push(coffee);
            }
        }else if (coffee.roast === selectedRoast) {
                if (coffee.name.toLowerCase().includes(coffeeName.value.toLowerCase())) {
                    filteredCoffees.push(coffee);
                }

            }
    });
     tbody.innerHTML = renderCoffees(filteredCoffees);

     return coffeeName.value;
    }
    //IDEA: add another form with customer name and return alert e.g. "Dear " + customerName + ", you chose a cup of.."
function clickButton(){
    var answer = confirm("Dear, customer! You choose a cup of "+ coffeeName.value + "! Do you want to submit your order?")
    if(answer)
    {
        alert("You submit your order successfully!");
    }
}

function addNewCoffee () {
    var coffeeEntered = document.getElementById('coffee-name1').value;
    var roastEntered = document.getElementById('roast-selection1').value;
    var lastID = coffees.length + 1;
    coffees.push({id: lastID, name: coffeeEntered, roast: roastEntered});

    console.log(coffeeEntered);
    console.log(roastEntered);
    console.log(lastID);
}


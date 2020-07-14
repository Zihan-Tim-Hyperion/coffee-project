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
//need add # in front of ID when use querySelector
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
//no # in front of ID when use getElementById
var coffeeName= document.getElementById("coffee-name");
var outputOrder= document.getElementById("output");
//creates var for evenlistener to add a coffee
var addCoffee = document.getElementById("submit1");
//tbody :get coffee list showed on the LEFT of the page
tbody.innerHTML = renderCoffees(coffees);

roastSelection.addEventListener('change', updateCoffees);
roastSelection.addEventListener('change', selectedCoffee);
coffeeName.addEventListener("keyup",selectedCoffee);
submitButton.addEventListener("click",clickButton);
addCoffee.addEventListener("click",addNewCoffee);

//coffee.name + coffee.roast
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

//choose the roast (all , dark, light, medium), then push coffees under certain roast to filteredCoffees, then showed them on left side of page
function updateCoffees(e) {
    if(e) {
        e.preventDefault(); // don't submit the form, we just want to update the data
    }
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if(selectedRoast === "all"){
            filteredCoffees.push(coffee);
        } else if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

//check the name user entered if matched certain coffee under certain roast, output all the matched coffee names on the left page
function selectedCoffee(e) {
    if(e) {
        e.preventDefault(); // don't submit the form, we just want to update the data
    }
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

//    click the button, then let user check if want to submit the order. if YES, then log "make the order!"
function clickButton() {
    if (coffeeName.value) {
        var order = confirm("Dear, customer! You choose a cup of " + coffeeName.value + " coffee !Do you want to submit your order?");
        // var  saveOutputItem= localStorage.getItem("");
        console.log(coffeeName.value);
        // localStorage.setItem(saveOutputItem);
        if (order) {
            alert("You submit your order successfully!");
            // localStorage.setItem(saveOutputItem);
            // console.log(coffeeName.value);
            outputOrder.innerHTML = "<h3 class='d-flex align-items-center mx-2' id='order'>Dear, customer! You ordered a cup of " + coffeeName.value.charAt(0).toUpperCase()+coffeeName.value.slice(1) + " coffee!</h3>";

        }
    } else{
        alert("Dear customer, please enter a coffee name to submit an order");
    }
}

function addNewCoffee(e) {
    var coffeeEntered = document.getElementById('coffee-name1').value;
    var roastEntered = document.getElementById('roast-selection1').value;
    var lastID = coffees.length + 1;
    if(coffeeEntered.length>0){
        coffees.push({id: lastID, name: coffeeEntered, roast: roastEntered});

        updateCoffees(e);
    } else{
        alert("Please enter a New Coffee Name");
    }

}
//Function to add a new coffee to list
document.addEventListener('DOMContentLoaded', function(e) {
    let localCoffees = localStorage.getItem("NewCoffeesArray");
    if(localCoffees !== null) {
        coffees = JSON.parse(localCoffees);
    }
    localStorage.setItem('NewCoffeesArray', JSON.stringify(coffees));
        console.log(coffees);
        updateCoffees();
});

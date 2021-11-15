//Globals
var toDoList = document.getElementById("itemList"); //this is where the item lists are inserted to.
var item = document.querySelector("input");// this is where the user inputs an item to do.
var itemArray = [];

//Font Awsome icons added to variable to shorten code in insertAdjacentHTML method.
var deleteFa = '<a style="color:red; display:inline-block; float:right; padding:10px;" class="delete far fa-times-circle fa-sm"></a>'
var completeFa = '<i style="color:green; display:inline-block; float:right; padding:10px;" class="complete far fa-check-circle fa-sm"></i>'

//Listener for addBtn.
document.querySelector("button").addEventListener("click", function() {
//add user input to array
if (item.value == "") {
  alert("Please add a value");
}else if (item.value != "") {
itemArray.push(item.value);
item.value= "";
//add array items HTML by inseting within a new div. also include FA icons.
toDoList.insertAdjacentHTML("beforeend",'<div>' + "<h2 style='display:inline-block; color: grey;'>" + itemArray.slice(-1)[0] + "</h2>" +
deleteFa + completeFa + "</div>");   //concatanation was needed!!!!
}


})

// Event Delegation, Listener for fa check symbol and trigger throughline of h2 in same div.
document.getElementById("itemList").addEventListener("click", function(e) {
if (e.target && e.target.matches ("i")) {
e.target.parentElement.firstElementChild.style.textDecoration="line-through";
//delete the entire div.
} else if (e.target && e.target.matches ("a")) {
e.target.parentElement.remove();
}
})

//Listener for Clear Items button.
document.getElementById("clearBtn").addEventListener("click", function() {
  var clearTarget = document.getElementById('itemList');
while (clearTarget.firstChild) clearTarget.removeChild(clearTarget.firstChild);
})



//what i have learned here!
//The problem i had is i could not assign an event handler to something that was not there on initial loadup, so i Used  an
//event delegation to listen to dynamically created HTML elements.
//This enabled me to add a button listener to something that was not created yet by listneing to the parent div instead.
//then using an if statmeent compare event.target & event.target.matches to the HTML element children like <i> or <a>.
//This will check the whole parent Div for the tag/element you have specified and trigger when it is clicked.

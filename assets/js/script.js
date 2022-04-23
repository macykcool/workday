// var saveBtn = function() {
//    localStorage.setItem("tasks", JSON.stringify(tasks));
// };

// var buttonEl = document.querySelector("save-task");
// console.log(buttonEl);

// buttonEl.addEventListener("click")

//moment api current hour
//comparing to value in btn 

var currentTime = moment().hour();
    console.log(currentTime);


var block9 = document.getElementById("block-9");
var input9 = document.getElementById("input-9");
input9.value = JSON.parse(localStorage.getItem("9"));
var btn9 = document.getElementById("btn-9");

btn9.addEventListener("click", function(event){
    var time = event.target.value;
    var text = input9.value;
    localStorage.setItem(time, JSON.stringify(text)); 

})
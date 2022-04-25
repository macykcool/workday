
//displays date in header
var currentDay = document.getElementById("currentDay");
var today = $(currentDay);
today.text(moment().format("dddd MMMM Do" + ", " + "YYYY"));



//9am 
var block9 = document.getElementById("block-9");
var input9 = document.getElementById("input-9");
input9.value = JSON.parse(localStorage.getItem("9"));
var btn9 = document.getElementById("btn-9");

btn9.addEventListener("click", function(event){
    var time = event.target.parentElement.value;
    var text = input9.value;
    console.log(time);
    console.log(event);
    localStorage.setItem(time, JSON.stringify(text)); 
})

//css time block
var colorTime9 = function() {
    var currentHour = moment().hour();
    console.log(currentHour);
    for (var i = 0; i < btn9.value; i++) {
        console.log(btn9.value);

        if (btn9.value < currentHour) {
            input9.classList.add("past");

        } else if (btn9.value > currentHour) {
            input9.classList.add("future");
        } else {
            input9.classList.add("present");
        } 
    }
};

colorTime9();

//10am

var block10 = document.getElementById("block-10");
var input10 = document.getElementById("input-10");
input10.value = JSON.parse(localStorage.getItem("10"));
var btn10 = document.getElementById("btn-10");

btn10.addEventListener("click", function(event){
    var time = event.target.parentElement.value;
    var text = input10.value;
    localStorage.setItem(time, JSON.stringify(text)); 
})

//css time block
var colorTime10 = function() {
    var currentHour = moment().hour();
    console.log(currentHour);
    for (var i = 0; i < btn10.value; i++) {
        console.log(btn10.value);

        if (btn10.value < currentHour) {
            input10.classList.add("past");

        } else if (btn10.value > currentHour) {
            input10.classList.add("future");
        } else {
            input10.classList.add("present");
        } 
    }
};

colorTime10();

//11am
var block11 = document.getElementById("block-11");
var input11 = document.getElementById("input-11");
input11.value = JSON.parse(localStorage.getItem("11"));
var btn11 = document.getElementById("btn-11");

btn11.addEventListener("click", function(event){
    var time = event.target.parentElement.value;
    var text = input11.value;
    localStorage.setItem(time, JSON.stringify(text)); 
})

//css time block
var colorTime11 = function() {
    var currentHour = moment().hour();
    console.log(currentHour);
    for (var i = 0; i < btn11.value; i++) {
        console.log(btn11.value);

        if (btn11.value < currentHour) {
            input11.classList.add("past");

        } else if (btn11.value > currentHour) {
            input11.classList.add("future");
        } else {
            input11.classList.add("present");
        } 
    }
};

colorTime11();


//12pm
var block12 = document.getElementById("block-12");
var input12 = document.getElementById("input-12");
input12.value = JSON.parse(localStorage.getItem("12"));
var btn12 = document.getElementById("btn-12");

btn12.addEventListener("click", function(event){
    var time = event.target.parentElement.value;
    var text = input12.value;
    localStorage.setItem(time, JSON.stringify(text)); 
})

//css time block
var colorTime12 = function() {
    var currentHour = moment().hour();
    console.log(currentHour);
    for (var i = 0; i < btn12.value; i++) {
        console.log(btn12.value);

        if (btn12.value < currentHour) {
            input12.classList.add("past");

        } else if (btn12.value > currentHour) {
            input12.classList.add("future");
        } else {
            input12.classList.add("present");
        } 
    }
};

colorTime12();

//1pm
var block13 = document.getElementById("block-13");
var input13 = document.getElementById("input-13");
input13.value = JSON.parse(localStorage.getItem("13"));
var btn13 = document.getElementById("btn-13");

btn13.addEventListener("click", function(event){
    var time = event.target.parentElement.value;
    var text = input13.value;
    localStorage.setItem(time, JSON.stringify(text)); 
})

//css time block
var colorTime13 = function() {
    var currentHour = moment().hour();
    console.log(currentHour);
    for (var i = 0; i < btn13.value; i++) {
        console.log(btn13.value);

        if (btn13.value < currentHour) {
            input13.classList.add("past");

        } else if (btn13.value > currentHour) {
            input13.classList.add("future");
        } else {
            input13.classList.add("present");
        } 
    }
};

colorTime13();


//2pm
var block14 = document.getElementById("block-14");
var input14 = document.getElementById("input-14");
input14.value = JSON.parse(localStorage.getItem("14"));
var btn14 = document.getElementById("btn-14");

btn14.addEventListener("click", function(event){
    var time = event.target.parentElement.value;
    var text = input14.value;
    localStorage.setItem(time, JSON.stringify(text)); 
})

//css time block
var colorTime14 = function() {
    var currentHour = moment().hour();
    console.log(currentHour);
    for (var i = 0; i < btn14.value; i++) {
        console.log(btn14.value);

        if (btn14.value < currentHour) {
            input14.classList.add("past");

        } else if (btn14.value > currentHour) {
            input14.classList.add("future");
        } else {
            input14.classList.add("present");
        } 
    }
};

colorTime14();

//3pm
var block15 = document.getElementById("block-15");
var input15 = document.getElementById("input-15");
input15.value = JSON.parse(localStorage.getItem("15"));
var btn15 = document.getElementById("btn-15");

btn15.addEventListener("click", function(event){
    var time = event.target.parentElement.value;
    var text = input15.value;
    localStorage.setItem(time, JSON.stringify(text)); 
})

//css time block
var colorTime15 = function() {
    var currentHour = moment().hour();
    console.log(currentHour);
    for (var i = 0; i < btn15.value; i++) {
        console.log(btn15.value);

        if (btn15.value < currentHour) {
            input15.classList.add("past");

        } else if (btn15.value > currentHour) {
            input15.classList.add("future");
        } else {
            input15.classList.add("present");
        } 
    }
};

colorTime15();

//4pm

var block16 = document.getElementById("block-16");
var input16 = document.getElementById("input-16");
input16.value = JSON.parse(localStorage.getItem("16"));
var btn16 = document.getElementById("btn-16");

btn16.addEventListener("click", function(event){
    var time = event.target.parentElement.value;
    var text = input16.value;
    localStorage.setItem(time, JSON.stringify(text)); 
})

//css time block
var colorTime16 = function() {
    var currentHour = moment().hour();
    console.log(currentHour);
    for (var i = 0; i < btn16.value; i++) {
        console.log(btn16.value);

        if (btn16.value < currentHour) {
            input16.classList.add("past");

        } else if (btn16.value > currentHour) {
            input16.classList.add("future");
        } else {
            input16.classList.add("present");
        } 
    }
};

colorTime16();

//5pm 

var block17 = document.getElementById("block-17");
var input17 = document.getElementById("input-17");
input17.value = JSON.parse(localStorage.getItem("17"));
var btn17 = document.getElementById("btn-17");

btn17.addEventListener("click", function(event){
    var time = event.target.parentElement.value;
    var text = input17.value;
    localStorage.setItem(time, JSON.stringify(text)); 
})

//css time block
var colorTime17 = function() {
    var currentHour = moment().hour();
    console.log(currentHour);
    for (var i = 0; i < btn17.value; i++) {
        console.log(btn17.value);

        if (btn17.value < currentHour) {
            input17.classList.add("past");

        } else if (btn17.value > currentHour) {
            input17.classList.add("future");
        } else {
            input17.classList.add("present");
        } 
    }
};

colorTime17();

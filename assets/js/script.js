
var currentTime = moment().hour();
    console.log(currentTime);

//9am 
var block9 = document.getElementById("block-9");
var input9 = document.getElementById("input-9");
input9.value = JSON.parse(localStorage.getItem("9"));
var btn9 = document.getElementById("btn-9");

btn9.addEventListener("click", function(event){
    var time = event.target.value;
    var text = input9.value;
    localStorage.setItem(time, JSON.stringify(text)); 
})

// //10am

// var block10 = document.getElementById("block-10");
// var input10 = document.getElementById("input-10");
// input10.value = JSON.parse(localStorage.getItem("10"));
// var btn10 = document.getElementById("btn-10");

// btn10.addEventListener("click", function(event){
//     var time = event.target.value;
//     var text = input10.value;
//     localStorage.setItem(time, JSON.stringify(text)); 
// })

// //11am
// var block11 = document.getElementById("block-11");
// var input11 = document.getElementById("input-11");
// input11.value = JSON.parse(localStorage.getItem("11"));
// var btn11 = document.getElementById("btn-11");

// btn11.addEventListener("click", function(event){
//     var time = event.target.value;
//     var text = input11.value;
//     localStorage.setItem(time, JSON.stringify(text)); 
// })

// //12pm
// var block12 = document.getElementById("block-12");
// var input12 = document.getElementById("input-12");
// input12.value = JSON.parse(localStorage.getItem("12"));
// var btn12 = document.getElementById("btn-12");

// btn12.addEventListener("click", function(event){
//     var time = event.target.value;
//     var text = input12.value;
//     localStorage.setItem(time, JSON.stringify(text)); 
// })

// //1pm
// var block13 = document.getElementById("block-13");
// var input13 = document.getElementById("input-13");
// input13.value = JSON.parse(localStorage.getItem("1"));
// var btn13 = document.getElementById("btn-13");

// btn13.addEventListener("click", function(event){
//     var time = event.target.value;
//     var text = input13.value;
//     localStorage.setItem(time, JSON.stringify(text)); 
// })

// //2pm
// var block14 = document.getElementById("block-14");
// var input14 = document.getElementById("input-14");
// input14.value = JSON.parse(localStorage.getItem("2"));
// var btn14 = document.getElementById("btn-14");

// btn14.addEventListener("click", function(event){
//     var time = event.target.value;
//     var text = input14.value;
//     localStorage.setItem(time, JSON.stringify(text)); 
// })

// //3pm
// var block15 = document.getElementById("block-15");
// var input15 = document.getElementById("input-15");
// input15.value = JSON.parse(localStorage.getItem("3"));
// var btn15 = document.getElementById("btn-15");

// btn15.addEventListener("click", function(event){
//     var time = event.target.value;
//     var text = input15.value;
//     localStorage.setItem(time, JSON.stringify(text)); 
// })

// //4pm

// var block16 = document.getElementById("block-16");
// var input16 = document.getElementById("input-16");
// input16.value = JSON.parse(localStorage.getItem("4"));
// var btn16 = document.getElementById("btn-16");

// btn16.addEventListener("click", function(event){
//     var time = event.target.value;
//     var text = input16.value;
//     localStorage.setItem(time, JSON.stringify(text)); 
// })
// //5pm 

// var block17 = document.getElementById("block-17");
// var input17 = document.getElementById("input-17");
// input17.value = JSON.parse(localStorage.getItem("5"));
// var btn17 = document.getElementById("btn-17");

// btn17.addEventListener("click", function(event){
//     var time = event.target.value;
//     var text = input17.value;
//     localStorage.setItem(time, JSON.stringify(text)); 
// })
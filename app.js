
let screen = document.querySelector(".screen")
let buttons = document.querySelectorAll(".btn")
let operators = document.querySelectorAll(".operation")
let numbers = document.querySelectorAll(".num")
let equality = document.querySelector("#equality")
let clear = document.querySelector("#clear")


buttons.forEach(function(button) {
    button.addEventListener("click" , function(e){
    let value = e.target.value;
    screen.value += value;
    })
})
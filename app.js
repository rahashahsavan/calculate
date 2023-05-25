
let screen = document.querySelector(".screen")
let buttons = document.querySelectorAll(".btn")
let operators = document.querySelectorAll(".operation")
let numbers = document.querySelectorAll(".num")
let equality = document.querySelector("#equality")
let clear = document.querySelector("#clear")


buttons.forEach(function(button) {
    button.addEventListener("click" , function(e){
    let value = e.target.value;           
    event.stopPropagation()                          // ?? I don't know what exactly do 
    if(value != undefined & value != "=" & value != "C" ){  
    screen.value += value; }                           // ?? if the code above not exist this show me three times of value
})                        
})

equality.addEventListener("click" , function(e){
    if(screen.value == ""){
        screen.value = ""
    }else{
        let answer = eval(screen.value)
        screen.value = answer
    }    
})

clear.addEventListener("click" , function(e){
    screen.value= " "
    event.stopImmediatePropagation()
})
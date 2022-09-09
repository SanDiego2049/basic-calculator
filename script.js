let button = document.querySelectorAll(".btn");
let display = document.querySelector("p");
let equalTo = document.querySelector(".equals");
let clear = document.querySelector(".ac");
let sign = document.querySelector(".sign")

function calcEvent() {
    display.textContent = eval(display.textContent) + " ";
} 

function delEvent() {
    return display.textContent = " ";
}

function signEvent() {
    return display.textContent = "-";
}

button.forEach((button) => {
    button.addEventListener("click", function() {
        display.textContent += button.innerText;   
    })   
})

equalTo.addEventListener("click", calcEvent)
 
clear.addEventListener("click", delEvent)

sign.addEventListener("click", signEvent)
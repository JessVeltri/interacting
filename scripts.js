// assignment2

// console.log("Interacting")

// // Invert
// var invertButton = document.querySelector(".bg-color")
// var bodyClass = document.body.classList

// invertButton.addEventListener("click", changeColor)

// function changeColor() {
//   bodyClass.add("invert")
// }


var button = document.querySelector('button')
var body = document.querySelector('body')

button.addEventListener('click', blowOutCandle)

function blowOutCandle() {
  body.classList.toggle('no-flame')
}
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const convertInput = document.getElementById("convert-input")
const lengthConversion = document.getElementById("length")
const volumeConversion = document.getElementById("volume")
const massConversion = document.getElementById("mass")

convertBtn.addEventListener("click", function() {
    if(convertInput.value){
        convert(convertInput.value)
    }
})

function convert(num) {
    // meter/feet
    let feet = (num * 3.281).toFixed(3)
    let meter = (num / 3.281).toFixed(3)
    lengthConversion.textContent = `${num} meter(s) = ${feet} feet | ${num} feet = ${meter} meter(s)`

    // liter/gallon
    let liter = (num / 0.264).toFixed(3)
    let gallon = (num * 0.264).toFixed(3)
    volumeConversion.textContent = `${num} liter(s) = ${gallon} gallon(s) | ${num} gallon = ${liter} liter(s)`

    // kg/lbs
    let kgs = (num * 2.204).toFixed(3)
    let lbs = (num / 2.204).toFixed(3)
    massConversion.textContent = `${num} kg(s) = ${kgs} lb(s) | ${num} lb(s) = ${lbs} kg(s)`
}


//Refactor the decimal place code and have it so that if that last number is 0 omit it from displaying 
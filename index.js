/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const convertInput = document.getElementById("convert-input")
const lengthConversion = 3.281
const volumeConversion = 0.264
const massConversion = 2.204

convertBtn.addEventListener("click", function() {
    if(convertInput.value){
        convert(convertInput.value)
    }
})

function convert(num) {
    // meter/feet
    let feet = (num * lengthConversion)
    let meter = (num / lengthConversion)
    
    // liter/gallon
    let liter = (num / volumeConversion).toFixed(3)
    let gallon = (num * volumeConversion).toFixed(3)
    
    // kg/lbs
    let kgs = (num * massConversion).toFixed(3)
    let lbs = (num / massConversion).toFixed(3)
    
}

function render(num) {
    convert(num)
    document.getElementById("length").textContent = `${num} meter(s) = ${feet} feet | ${num} feet = ${meter} meter(s)`
    document.getElementById("volume").textContent = `${num} liter(s) = ${gallon} gallon(s) | ${num} gallon(s) = ${liter} liter(s)`
    document.getElementById("mass").textContent = `${num} kg(s) = ${kgs} lb(s) | ${num} lb(s) = ${lbs} kg(s)`
}

//Refactor the decimal place code and have it so that if that last number is 0 omit it from displaying 
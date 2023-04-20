/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const convertInput = document.getElementById("convert-input")
const lengthConversion = 3.28084
const volumeConversion = 0.264172
const massConversion = 2.20462
let conversion = {
    meter: 0,
    feet: 0,
    liter: 0,
    gallon: 0,
    kilogram: 0,
    pound: 0
}

convertBtn.addEventListener("click", function() {
    if(convertInput.value){
        convert(convertInput.value)
    }
})

function convert(num) {
    //length
   conversion.feet = lengthConversion * num
   conversion.meter = (1/lengthConversion) * num 
   //volume
   conversion.gallon = volumeConversion * num
   conversion.liter = (1/volumeConversion) * num 
   //mass
   conversion.pound = massConversion * num
   conversion.kilogram = (1/massConversion) * num 
   for(let value in conversion){
        conversion[value] = conversion[value].toFixed(3)
   }
   render(num)
}

function render(num) {
    document.getElementById("length").textContent = `${num} meter(s) = ${conversion.feet} feet | ${num} feet = ${conversion.meter} meter(s)`
    document.getElementById("volume").textContent = `${num} liter(s) = ${conversion.gallon} gallon(s) | ${num} gallon(s) = ${conversion.liter} liter(s)`
    document.getElementById("mass").textContent = `${num} kg(s) = ${conversion.pound} lb(s) | ${num} lb(s) = ${conversion.kilogram} kg(s)`
}

//Refactor the decimal place code and have it so that if that last number is 0 omit it from displaying 
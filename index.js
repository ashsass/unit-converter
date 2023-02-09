/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const convertInput = document.getElementById("convert-input")

convertBtn.addEventListener("click", function() {
    convert(convertInput.value)
})

function convert(num) {
    //Meter to feet
    let feet = num * 3.281
    console.log(`${num} meter(s) = ${feet} feet`)
}

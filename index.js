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
let conversion = fetchConversionData()

//When convert button is clicked the value will get converted to imperial/metric units
convertBtn.addEventListener("click", function() {
    if(convertInput.value){
        convert(convertInput.value)
    }
})

//After the input is converted it will render to the page and it will set the local storage 
function convert(num) {
    //Set input value in object so that local storage can remember it upon reload
    conversion.num = num
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
        if(conversion[value] % 1){
            conversion[value] = conversion[value].toFixed(3)
            //Checking is the converted value is a decimal. If so if will be cut to three decimal places
        }
   }
   setStorage()
   render()
}

//Setting local storage
function setStorage() {
    localStorage.setItem("conversion", JSON.stringify(conversion))
}

//If local storage is available it will pull from that, if not it will pull from the reset value
function render() {
    document.getElementById("length").textContent = `${conversion.num} meter(s) = ${conversion.feet} feet | ${conversion.num} feet = ${conversion.meter} meter(s)`
    document.getElementById("volume").textContent = `${conversion.num} liter(s) = ${conversion.gallon} gallon(s) | ${conversion.num} gallon(s) = ${conversion.liter} liter(s)`
    document.getElementById("mass").textContent = `${conversion.num} kg(s) = ${conversion.pound} lb(s) | ${conversion.num} lb(s) = ${conversion.kilogram} kg(s)`
}

//Grabs local storage data or the reset value 
function fetchConversionData() {
    if(localStorage.getItem("conversion")){
        console.log(`Conversion is in local storage.`)
        return JSON.parse(localStorage.getItem("conversion"))
    }
    else {
        return {
            num: 0,
            meter: 0,
            feet: 0,
            liter: 0,
            gallon: 0,
            kilogram: 0,
            pound: 0
        } 
    }
}

render(fetchConversionData())
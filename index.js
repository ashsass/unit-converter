/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertInput = document.getElementById("convert-input")
const lengthConversion = 3.28084
const volumeConversion = 0.264172
const massConversion = 2.20462
let conversion = fetchConversionData()

document.addEventListener("click", function(e){
    if(e.target.id === "convert-btn"){
        if(convertInput.value){ //check if value has been input, if so render information to page
            convert(convertInput.value)
        }
    }
    else if(e.target.id === "reset-btn"){
        resetStorage()
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

//Local storage functions
//Grabs data from local storage, if none then creates base line values
function fetchConversionData() {
    if(localStorage.getItem("conversion")){
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

//Setting local storage
function setStorage() {
    localStorage.setItem("conversion", JSON.stringify(conversion))
}

//Resets local storage, resets conversion object, clears input value, and re-renders page
function resetStorage() {
    localStorage.clear()
    convertInput.value = ''
    conversion = fetchConversionData()
    render()
}

function render() {
    const {
        num,
        meter,
        feet,
        liter,
        gallon,
        kilogram,
        pound
    } = conversion //destructure conversion
    //render information to page
    document.getElementById("length").textContent = `${num} meter(s) = ${feet} feet | ${num} feet = ${meter} meter(s)`
    document.getElementById("volume").textContent = `${num} liter(s) = ${gallon} gallon(s) | ${num} gallon(s) = ${liter} liter(s)`
    document.getElementById("mass").textContent = `${num} kg(s) = ${pound} lb(s) | ${num} lb(s) = ${kilogram} kg(s)`
}

render()
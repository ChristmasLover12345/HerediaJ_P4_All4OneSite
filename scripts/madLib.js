import { MADLIBFetch } from "./app.js";

let Object = document.getElementById("Object")
let Holiday = document.getElementById("Holiday")
let Place = document.getElementById("Place")
let Relative = document.getElementById("Relative")
let Animal = document.getElementById("Animal")
let Food = document.getElementById("Food")
let Color = document.getElementById("Color")
let PNoun = document.getElementById("PNoun")
let Adjective = document.getElementById("Adjective")
let Weather = document.getElementById("Weather")

let cpuResponse = document.getElementById("cpuResponse")
let magicBtn = document.getElementById("magicBtn")


magicBtn.addEventListener('click', async () => {
    
        let data = await MADLIBFetch(Object.value, Holiday.value,Place.value, Relative.value,Animal.value, Food.value,Color.value, PNoun.value,Adjective.value, Weather.value,)
        cpuResponse.innerText = data

});
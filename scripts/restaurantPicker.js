import { RestaurantFetch } from "./app.js";


let foodBtn1 = document.getElementById("foodBtn1")
let foodBtn2 = document.getElementById("foodBtn2")
let foodBtn3 = document.getElementById("foodBtn3")

let cpuResponse = document.getElementById("cpuResponse")

foodBtn1.addEventListener('click', async () => {
    
    let data = await RestaurantFetch("italian")
    cpuResponse.innerText = data

});

foodBtn2.addEventListener('click', async () => {
    
    let data = await RestaurantFetch("mexican")
    cpuResponse.innerText = data

});

foodBtn3.addEventListener('click', async () => {
    
    let data = await RestaurantFetch("dutch")
    cpuResponse.innerText = data

});
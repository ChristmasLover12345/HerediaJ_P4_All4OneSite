import { reverseNumsFetch } from "./app.js";


let number = document.getElementById("number")
let cpuResponse = document.getElementById("cpuResponse")
let magicBtn = document.getElementById("magicBtn")

magicBtn.addEventListener('click', async () => {
    
    let data = await reverseNumsFetch(number.value)
    cpuResponse.innerText = data

});
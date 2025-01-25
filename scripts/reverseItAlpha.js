import { reverseAlphaFetch } from "./app.js";


let word = document.getElementById("word")
let cpuResponse = document.getElementById("cpuResponse")
let magicBtn = document.getElementById("magicBtn")

magicBtn.addEventListener('click', async () => {
    
    let data = await reverseAlphaFetch(word.value)
    cpuResponse.innerText = data

});
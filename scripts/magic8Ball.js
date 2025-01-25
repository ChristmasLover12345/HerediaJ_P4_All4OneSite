import { magicFetch } from "./app.js";


let question = document.getElementById("question")
let cpuResponse = document.getElementById("cpuResponse")
let magicBtn = document.getElementById("magicBtn")

magicBtn.addEventListener('click', async () => {
    
    let data = await magicFetch(question.value)
    cpuResponse.innerText = data

});
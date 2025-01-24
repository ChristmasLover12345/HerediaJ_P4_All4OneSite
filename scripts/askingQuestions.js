import { AskFetch } from "./app.js";

let firstQuestion = document.getElementById("firstQuestion")
let secondQuestion = document.getElementById("secondQuestion")
let cpuResponse = document.getElementById("cpuResponse")
let magicBtn = document.getElementById("magicBtn")

magicBtn.addEventListener('click', async () => {

    if (firstQuestion.value != "" && secondQuestion.value != "")
    {
        
        let data = await AskFetch(firstQuestion.value, secondQuestion.value)
        cpuResponse.innerText = data

    }

});
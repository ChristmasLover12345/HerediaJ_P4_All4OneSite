import { helloFetch } from "./app.js";

let helloBtn = document.getElementById("helloBtn")
let helloResponse = document.getElementById("helloResponse")
let userInput = document.getElementById("userInput")


helloBtn.addEventListener('click', async () => {

    if(userInput != "")
        {
            let data = await helloFetch(userInput.value)
            helloResponse.innerText = data
        }
    
});
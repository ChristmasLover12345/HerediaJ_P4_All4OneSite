import { GTLTFetch } from "./app.js";

let num1Input = document.getElementById("num1Input")
let num2Input = document.getElementById("num2Input")
let response = document.getElementById("response")
let magicBtn = document.getElementById("magicBtn")

magicBtn.addEventListener('click', async () => {

    if (num1Input.value != "" && num2Input.value != "")
    {
        
        let data = await GTLTFetch(num1Input.value, num2Input.value)
        response.innerText = data

    }

});
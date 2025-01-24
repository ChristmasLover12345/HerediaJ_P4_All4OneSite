import { AddTwoFetch } from "./app.js";

let num1Input = document.getElementById("num1Input")
let num2Input = document.getElementById("num2Input")
let totalNum = document.getElementById("totalNum")
let magicBtn = document.getElementById("magicBtn")



magicBtn.addEventListener('click', async () => {

    if (num1Input.value != "" && num2Input.value != "")
    {
        
        let data = await AddTwoFetch(num1Input.value, num2Input.value)
        totalNum.innerText = data

    }

});
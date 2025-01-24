import { helloFetch } from "./app.js";

let helloBtn = document.getElementById("helloBtn")
let helloResponse = document.getElementById("helloResponse")

helloBtn.addEventListener('click', async () => {
    let data = await helloFetch()
    helloResponse.innerText = data
});
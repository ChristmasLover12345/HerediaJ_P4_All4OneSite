

async function helloFetch()
{
    const promise = await fetch("https://jherediaall41apis-e2gkayhtajhkdhb6.westus-01.azurewebsites.net/HelloWorld/HelloWorld")
    const data = await promise.text()
    console.log(data)
    return data
}

async function AddTwo(num1, num2)
{
    const promise = await fetch(`https://jherediaall41apis-e2gkayhtajhkdhb6.westus-01.azurewebsites.net/AddingTwo/AddTwo/${num1}/${num2}`)
    const data = await promise.text()
    console.log(data)
    return data
}

export { helloFetch, AddTwo }
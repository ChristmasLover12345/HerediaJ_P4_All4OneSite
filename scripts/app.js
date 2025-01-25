

async function helloFetch()
{
    const promise = await fetch("https://jherediaall41apis-e2gkayhtajhkdhb6.westus-01.azurewebsites.net/HelloWorld/HelloWorld")
    const data = await promise.text()
    console.log(data)
    return data
}

async function AddTwoFetch(num1, num2)
{
    const promise = await fetch(`https://jherediaall41apis-e2gkayhtajhkdhb6.westus-01.azurewebsites.net/AddingTwo/AddTwo/${num1}/${num2}`)
    const data = await promise.text()
    console.log(data)
    return data
}

async function AskFetch(userName, wokeAt)
{
    const promise = await fetch(`https://jherediaall41apis-e2gkayhtajhkdhb6.westus-01.azurewebsites.net/AskingQuestions/AskingYourName/${userName}/${wokeAt}`)
    const data = await promise.text()
    console.log(data)
    return data
}

async function GTLTFetch(num1, num2)
{
    const promise = await fetch(`https://jherediaall41apis-e2gkayhtajhkdhb6.westus-01.azurewebsites.net/GreaterLessThan/GTLT/${num1}/${num2}`)
    const data = await promise.text()
    console.log(data)
    return data
}

async function MADLIBFetch( Object, holiday, place, relative, animal, food, color, pluralNoun, adjective, weather)
{
    const promise = await fetch(`https://jherediaall41apis-e2gkayhtajhkdhb6.westus-01.azurewebsites.net/MadLib/MadLib/${Object}/${holiday}/${place}/${relative}/${animal}/${food}/${color}/${pluralNoun}/${adjective}/${weather}`)
    const data = await promise.text()
    console.log(data)
    return data
}

async function oddFetch(number)
{
    const promise = await fetch(`https://jherediaall41apis-e2gkayhtajhkdhb6.westus-01.azurewebsites.net/OddOrEven/OddOrEven/${number}`)
    const data = await promise.text()
    console.log(data)
    return data
}

async function reverseAlphaFetch(word)
{
    const promise = await fetch(`https://jherediaall41apis-e2gkayhtajhkdhb6.westus-01.azurewebsites.net/ReverseItAlpha/ReverseAlpha/${word}`)
    const data = await promise.text()
    console.log(data)
    return data
}

async function reverseNumsFetch(number)
{
    const promise = await fetch(`https://jherediaall41apis-e2gkayhtajhkdhb6.westus-01.azurewebsites.net/ReverseItNumbers/ReverseNumber/${number}`)
    const data = await promise.text()
    console.log(data)
    return data
}

async function magicFetch(userQuestion)
{
    const promise = await fetch(`https://jherediaall41apis-e2gkayhtajhkdhb6.westus-01.azurewebsites.net/Magic8Ball/MagicBall/${userQuestion}`)
    const data = await promise.text()
    console.log(data)
    return data
}


export { helloFetch, AddTwoFetch, AskFetch, GTLTFetch, MADLIBFetch, oddFetch, reverseAlphaFetch, reverseNumsFetch, magicFetch }
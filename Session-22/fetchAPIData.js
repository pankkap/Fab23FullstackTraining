
const  covidUrl = "https://api.covid19api.com/summary"

function display(name)
{
    var newDiv = document.createElement('div')
    newDiv.id = "main"

    var newh1 = document.createElement('h1')
    newh1.innerHTML ="Country Name: " + name
    newh1.style.color = "red"
    document.body.appendChild(newDiv)
    newDiv.appendChild(newh1)
    
}
async function getDataFromAPI(url)
{
      let data =   await fetch(url)
      let result = await data.json()
      console.log(result)
      display(result.Countries[60].Country)
}
getDataFromAPI(covidUrl)

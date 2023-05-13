
const  covidUrl = "https://api.covid19api.com/summary"

function display(name, date)
{
    var cDate = new Date(date);
    var newDiv = document.createElement('div')
    newDiv.id = "main"

    var newh1 = document.createElement('h1')
    newh1.innerHTML ="New Cases: " + name
    
    var newh2 = document.createElement('h1')
    newh2.innerHTML ="Date: " + cDate
    newh2.style.color = "green"
    document.body.appendChild(newDiv)
    newDiv.appendChild(newh1)
    newDiv.appendChild(newh2)
    
}
async function getDataFromAPI(url)
{
      let data =   await fetch(url)
      let result = await data.json()
      console.log(result)
      display(result.Countries[60].NewConfirmed
        , result.Date)
}
getDataFromAPI(covidUrl)

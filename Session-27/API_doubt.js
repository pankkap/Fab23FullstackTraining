// API: Application user Interface (End Point of a server)
// APIs are of two types
// 1. Public API
        // free API : jsonplaceholder
        // Paid API : based on some payment option
// 2. Private API
let api_key = "863242cfb2b1d357e6093d9a4df19a4b"
let city = "delhi"
let api_url=  `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${api_key}`

function getWeatherData(url){
    fetch(url)
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.log(err)) 

}


console.log( getWeatherData(api_url))
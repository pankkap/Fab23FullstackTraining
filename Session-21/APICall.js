const apiUrl = "https://jsonplaceholder.typicode.com/users"


function getApiData(url)
{
    // Get the data from an API
    // JavaScript Function to deal with an API
      // When promise reject
      setTimeout(() => {
        fetch(url)
    .then((data)=>{return data.json()})
    .then((result)=>{console.log(result)})     // When promise resolve
    .catch((err)=>{console.log(err)}); 
      }, 5000);
}

// Async- Await functionality
// async function getApiData(url)
// {
//     // Get the data from an API
//     // JavaScript Function to deal with an API
//     let res = await fetch(url)
//     let data = await res.json()
//     console.log(data)    
// }

getApiData(apiUrl)
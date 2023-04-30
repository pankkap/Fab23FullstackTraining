const apiUrl = "https://api.covid19api.com/summary"
function displayPhoto(x){
  var newPhoto = document.createElement('img')
  newPhoto.src = x;
  document.body.appendChild(newPhoto)
}

function getApiData(url)
{
    // Get the data from an API
    // JavaScript Function to deal with an API
      // When promise reject
      setTimeout(() => {
        fetch(url)
    .then((data)=>{return data.json()})
    .then((result)=>{
      console.log(result)
      // console.log(result.photos[0].img_src)
      // console.log(displayPhoto(result.photos[0].img_src))
    })     // When promise resolve
    .catch((err)=>{console.log(err)}); 
      });
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
import axios from "axios";
import react from 'react';

const  covidUrl = "https://jsonplaceholder.typicode.com/users"

function getdata (url)
{
    axios.get(url)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))

}

getdata(covidUrl);
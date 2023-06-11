import React from 'react'
import Movies from './Movies'
import Movie_Card from './Movie_Card'
export default function Movie_App() {
    // console.log(Movies)
  return (
    <div>
      <h2>Movie Mania</h2>
      {
        Movies.map((movie,i)=>(
            <Movie_Card movie={movie} key={i}/>
        ))
      }
    </div>
  )
}

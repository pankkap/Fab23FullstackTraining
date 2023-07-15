import React from 'react'
import notFound from './Images/404.jpg'
export default function PageNotFound() {
  return (
    <div>
      <h2 className='text-center text-primary'> Page Not Found</h2>
      <div className='text-center'>
      <img src={notFound} alt=""  style={{width:"500px" }}/>
      </div>
    </div>
  )
}

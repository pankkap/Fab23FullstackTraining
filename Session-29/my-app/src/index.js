import React from 'react'             // perform React Functionality
import ReactDOM from 'react-dom/client'      // rendering the content
import App from './App'

// React-18 way of rendering content
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>  )

// Oldest way of rendering content in React
// ReactDOM.render(<App/>, document.getElementById('root'))
import { useState } from 'react'
import './App.css'
import './AppDark.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './Components/Home/Home'
import Portfolio from './Components/Portfolio/Portfolio'

const routeur = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: '/portfolio',
    element: <Portfolio></Portfolio>
  }
])
function App() {

  return (
    <div>
      <RouterProvider router={routeur}></RouterProvider>
    </div>
  )
}

export default App

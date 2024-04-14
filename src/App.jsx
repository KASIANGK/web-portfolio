import { useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'

const routeur = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
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

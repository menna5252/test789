import React from 'react'

import { createHashRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

import Layout from './components/Layout/Layout'
import Not from './components/Not/Not'
import Portfolio from './components/Portfolio/Portfolio.jsx'
export default function App() {
const router = createHashRouter([
  {
    path: "",element:<Layout/>,children:[
      {index : true, element: <Home/>},
      {path: "about" , element : <About/>},
      {path: "contact" , element : <Contact/>},
      {path: "portfolio" , element : <Portfolio/>},
      {path: "*" , element : <Not/>},
    ],

  },
]
);
  return (
    <>
  <RouterProvider router={router} />
  </>
  )
}


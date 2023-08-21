import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Services from './Pages/Services.jsx'
import Contact from './Pages/Contact.jsx'



const routerProvider = createBrowserRouter([
  {

    path: "/" ,
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/contact",
        element: <Contact />
      }

    ]

}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routerProvider} />
  </React.StrictMode>,
)

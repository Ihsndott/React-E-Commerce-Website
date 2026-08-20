import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Notfound from './Notfound'
import Layout from './Layout'
import Home from './Home'
import Products from './Products'
import About from './About'
import Services from './Services'
import Addtocart from './Addtocart'


const router =  createBrowserRouter ([
  {
    path:'/',
    element:<Layout/>,
    errorElement:<Notfound/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"Products",
        element:<Products/>
      },
      {
        path:"About",
        element:<About/>
      },
      {
        path:"Services",
        element:<Services/>
      },
      {
        path:"Addtocart",
        element:<Addtocart/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="bg-[#0A1011] min-h-screen">
    <RouterProvider router={router}></RouterProvider>
    </div>
  </StrictMode>,
)
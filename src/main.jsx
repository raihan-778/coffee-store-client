import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import AddCoffee from './components/addCoffee/AddCoffee.jsx'
import UpdateCoffee from './components/updateCoffee/UpdateCoffee.jsx'
import './index.css'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children:[
     

    ]

  },
  {path:'/update-coffee',
    element:<UpdateCoffee></UpdateCoffee>

  },
  { path:'/add-coffee',
    element:<AddCoffee></AddCoffee>,

  }


])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

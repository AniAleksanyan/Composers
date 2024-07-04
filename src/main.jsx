import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Root } from './pages/Root.jsx'
import { Composers } from './pages/Composers.jsx'
import { AddComposer } from './pages/AddComposer.jsx'
import { EditComposer } from './pages/EditComposer.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children : [
      {
        path:"/list",
        element:<Composers/>
      },
      {
        path:"/add",
        element:<AddComposer/>
      },
      {
        path:"/edit/:id",
        element:<EditComposer/>
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

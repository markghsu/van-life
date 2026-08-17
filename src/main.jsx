import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import Layout from "./components/Layout"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{
        index: true,
        element: <h1>Hello</h1>,
      },
      {
        path: "vans",
        element: <h1>Vans</h1>,
      },
      {
        path: "host",
        element: <h1>Host</h1>,
      },
      {
        path: "about",
        element: <h1>About</h1>,
      },
      {
        path: "login",
        element: <h1>About</h1>,
      },
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

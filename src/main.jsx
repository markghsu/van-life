import mirageServer from'./server' // MIRAGE JS STUB
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import Layout from "./components/Layout"
import Home from "./routes/Home"
import About from "./routes/About"
import Vans from "./routes/Vans"

mirageServer()
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{
        index: true,
        element: <Home />,
      },
      {
        path: "vans",
        element: <Vans />,
      },
      {
        path: "host",
        element: <h2>Host</h2>
      },
      {
        path: "about",
        element: <About />,
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

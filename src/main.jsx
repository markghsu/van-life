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
import VanDetail from "./routes/VanDetail"
import HostLayout from "./components/HostLayout"
import HostVans from "./routes/host/HostVans"
import HostVanDetail from "./routes/host/HostVanDetail"
import HostIncome from "./routes/host/HostIncome"
import HostReviews from "./routes/host/HostReviews"
import HostDashboard from "./routes/host/HostDashboard"

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
        path: "vans/:id",
        element: <VanDetail />,
      },
      {
        path: "host",
        element: <HostLayout />,
        children: [{
          index: true,
          element: <HostDashboard />
        },
        {
          path: "reviews",
          element: <HostReviews />,
        },
        {
          path: "income",
          element: <HostIncome />,
        },
        {
          path: "vans",
          element: <HostVans />,
        },
        {
          path: "vans/:id",
          element: <HostVanDetail />,
        },
      ]
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

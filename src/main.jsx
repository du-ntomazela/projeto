import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./pages/home.jsx"
import Infos from "./pages/infos.jsx"
import ErrorPage from "./pages/ErrorPage.jsx"

const router = createBrowserRouter([
  {
    path: "/projeto",
    element: <App />,
    errorElement: <ErrorPage />,
    children:[
      {
        path:"/projeto",
        element: <Home />

      },
      {
        path: "/projeto/infos",
        element: <Infos />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>, 
)

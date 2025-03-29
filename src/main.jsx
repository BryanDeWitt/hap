import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { JavaScript } from './JavaScript.jsx'
import { SolucionesJS } from './SolucionesJS.jsx'
import { Solucion } from './Solucion.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/soluciones/javaScript',
    element: <JavaScript />,
  },
  {
    path: '/soluciones/javaScript/:id',
    element: <SolucionesJS />,
  },
  {
    path: '/soluciones/javaScript/:id/:index',
    element: <Solucion />,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { JavaScript } from './JavaScript.jsx'
import { SolucionesJS } from './SolucionesJS.jsx'
import { Solucion } from './Solucion.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/soluciones/javaScript" element={<JavaScript />} />
        <Route path="/soluciones/javaScript/:id" element={<SolucionesJS />} />
        <Route path="/soluciones/javaScript/:id/:index" element={<Solucion />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)

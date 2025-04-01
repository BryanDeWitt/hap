import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { JavaScript } from './JavaScript.jsx'
import { SolucionesJS } from './SolucionesJS.jsx'
import { Solucion } from './Solucion.jsx'
import { Layout } from './Layout.jsx'
import { Soluciones } from './Soluciones.jsx'
import { Conceptos } from './Conceptos.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/conceptos" element={<Conceptos />} />
          <Route path="/soluciones" element={<Soluciones />} />
          <Route path="/soluciones/javaScript" element={<JavaScript />} />
          <Route path="/soluciones/javaScript/:id" element={<SolucionesJS />} />
          <Route path="/soluciones/javaScript/:id/:index" element={<Solucion />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
)

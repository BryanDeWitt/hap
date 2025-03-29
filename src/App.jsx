import { Link } from 'react-router-dom'
import './App.css'


function App() {


  return (
    <>
      <h1>Hurones a Programar</h1>
      <h2>Recomendación: intentar resolver los ejercicios antes de mirar las soluciones</h2>
      <Link to="/soluciones/javaScript" className='boton-soluciones'>Soluciones JavaScript</Link>
    </>
  )
}

export default App

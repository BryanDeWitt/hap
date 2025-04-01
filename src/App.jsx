import { Link } from 'react-router-dom'
import './App.css'
import { Eye, Brain} from '../svgs/Svgs'


function App() {
  return (
    <>
      <div className='inicio'>
        <Link to={"/conceptos"} ><button className='botones-inicio'><Brain /> Conceptos</button></Link>
        <Link to="/soluciones" ><button className='botones-inicio'><Eye /> Soluciones</button></Link>
      </div>
    </>
  )
}

export default App

import { Link } from "react-router-dom"
import './App.css'
import { JS } from "../svgs/Svgs.jsx"

export const Soluciones = () => {
    return (
        <>
        <h2 className="recomendacion">Recomendación: intentar resolver los ejercicios antes de mirar las soluciones</h2>
            <div className="inicio">
                <Link to={'/soluciones/javaScript'}>
                    <button className="botones-inicio"><JS />Soluciones JS</button>
                </Link>
            </div>
            <h2 className='volver'><Link to='/'>Volver</Link></h2>
        </>
    )
}
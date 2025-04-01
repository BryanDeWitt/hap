import { useParams, Link } from 'react-router-dom'
import { leccionesJS, leccionesArray } from '../jsons/lecciones.js'
import './JavaScript.css'

export const SolucionesJS = () => {
    const { id } = useParams()
    return (
        <>
            <h1>Soluciones para { leccionesJS[id] }</h1>
            {
                <ul className='lista-soluciones'>
                    {
                        leccionesArray[id].map((solucion, index) => (
                            <li key={index} className='items-lista'>
                                <Link to={`/soluciones/javaScript/${id}/${index}`}>{index + 1}: {solucion}</Link>
                            </li>
                        ))
                    }
                </ul>
            }
            <h2 className='volver'><Link to='/soluciones/javaScript'>Volver</Link></h2>
        </>
    )
}
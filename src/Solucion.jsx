import { useParams, Link } from 'react-router-dom'
import { leccionesArray } from '../jsons/lecciones'
import soluciones from '../jsons/solucionesJS.json'
import './solucion.css'

export const Solucion = () => {
    const { index, id } = useParams()
    const leccion = leccionesArray[id][index]
    const solucion = soluciones[leccion]
    return (
        <>
            <h1>Solucion para: { leccion }</h1>

            <h3 className='explicacion'>{ solucion.explicacion ? solucion.explicacion : 'No se ha encontrado la solucion' }</h3>
            <h2>Soluciones: </h2>
            {
                solucion.soluciones.map((solucion, index) => (
                    <pre key={index} className='solucion'>{solucion}</pre>
                ))
            }
            <h2 className="volver">
                <Link to={`/soluciones/javaScript/${id}`}>Volver</Link>
            </h2>
        </>
    )
}
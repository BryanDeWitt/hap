import { useParams, Link } from 'react-router-dom'
import { leccionesArray } from '../jsons/lecciones'
import soluciones from '../jsons/solucionesJS.json'
import './solucion.css'
import { useState } from 'react'

export const Solucion = () => {
    const [show, setShow] = useState(false)
    const { index, id } = useParams()
    const maxIndex = leccionesArray[id].length - 1
    const leccion = leccionesArray[id][index]
    const solucion = soluciones[leccion]
    const handleShow = () => {
        setShow(!show)
    }
    
    return (
        <>
            <h1>Solucion para: { leccion }</h1>
            <h3 className='explicacion'>{ solucion.explicacion ? solucion.explicacion : 'No se ha encontrado la solucion' }</h3>
            <div className='botones'>
                <Link to={`/soluciones/javaScript/${id}/${Number(index) - 1 < 0 ? 0 : Number(index) - 1}`}><button>Anterior</button></Link>
                <button onClick={handleShow}>{ show ? 'Ocultar codigo' : 'Mostrar codigo' }</button>
                <Link to={`/soluciones/javaScript/${id}/${Number(index) + 1 > maxIndex ? maxIndex : Number(index) + 1}`}><button>Siguiente</button></Link>
            </div>
            { solucion.pseudocode && 
                <>
                <h2>Pseudo código</h2>
                {
                    solucion.pseudocode.map((solucion, index) => (
                        <pre key={index} className='solucion'>{solucion}</pre>
                    ))
                }   
                </>
            }
            <h2>{ solucion.soluciones.length > 1 ? 'Soluciones' : 'Solucion' }</h2>
            { show &&
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
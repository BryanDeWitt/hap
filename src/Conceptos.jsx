import { Link } from "react-router-dom"
import './conceptos.css'

export function Conceptos() {
    return (
        <>
            <h1 className="titulo">Conceptos</h1>
            <h1>Proximamente</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5YKOuoVLtbVKjkiSW7Fi5C9jSFtaC_Hy0EA&s" alt="" />
            <h2 className='volver'><Link to='/'>Volver</Link></h2>
        </>
    )
}
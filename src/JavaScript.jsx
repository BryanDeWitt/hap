import { Link } from "react-router-dom";
import { leccionesJS } from "../jsons/lecciones";
import "./JavaScript.css";

export const JavaScript = () => {
  return (
    <>
      <h1 className="titulo">JavaScript</h1>

      <ul className="lista-soluciones">
        {Object.entries(leccionesJS).map(([clave, valor], index) => (
          <li key={clave} className="items-lista">
            <Link to={`/soluciones/javaScript/${clave}`}>{index + 1}: {valor}</Link>
          </li>
        ))}
      </ul>

      <h2 className="volver">
        <Link to="/">Volver</Link>
      </h2>
    </>
  )
}

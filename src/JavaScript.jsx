import { Link } from "react-router-dom";
import { leccionesJS } from "../jsons/lecciones";
import "./javaScript.css";

export const JavaScript = () => {
  return (
    <>
      <h1>JavaScript</h1>

      <ul className="lista">
        {Object.entries(leccionesJS).map(([clave, valor], index) => (
          <li key={clave} className="lista">
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

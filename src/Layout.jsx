import { Link, Outlet } from "react-router-dom"
import './Layout.css'

export const Layout = () => {
    return (
        <>
            <header className="layout">
                <Link className="logo"to="/">
                    <h1 >Ayuda JaP 2025</h1>
                </Link>
                <div>
                    <ul>
                        <li>
                            <Link to="/soluciones">👀 Soluciones</Link>
                        </li>
                        <li>
                            <Link to="/conceptos">🧠 Conceptos</Link>
                        </li>
                    </ul>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
         </>
    )
}
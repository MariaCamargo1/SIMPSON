import {Outlet, Link} from "react-router-dom";
const Layout =() => {
    return <div>
        <nav>
            <ul>
                <li>
                    <button><Link to="/Character">Personajes</Link></button>
                </li>
                <li>
                    <button><Link to="/About">Nosotros</Link></button>
                </li>
                <li>
                    <button><Link to="/">Inicio</Link></button>
                </li>
            </ul>
        </nav>
        <Outlet/>
    </div>
}

export default Layout;
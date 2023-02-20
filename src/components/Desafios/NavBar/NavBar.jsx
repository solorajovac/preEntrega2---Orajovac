import { CartWidget } from "../CartWidget/CartWidget"
import './NavBar.css';
import logo from '../../../assets/productos/logo-Royal-Enfield.png';
import {NavLink, Link} from 'react-router-dom';

export const Navbar = () =>{
    return(
        <nav className='nav-container'>
            <Link to="/">
                <div>
                    <img className="nav-brand" src={logo} alt="logo"/>
                </div>
            </Link>
            <div className='navegacion'>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/">Inicio</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/productos/the_office">Standart</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/productos/dc">Custom</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/productos/seleccion">Tope de gama</NavLink>
            </div>
            <div>
                <CartWidget/>
            </div>
        </nav>
    )
}

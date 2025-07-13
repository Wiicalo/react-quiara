import { Link, NavLink } from 'react-router-dom';
import smartlogo from "../../assets/smartlogo.png";
import CardWidget from "../CarWidget.jsx";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/">
        <img src={smartlogo} alt="SmartLogo" className="SmartLogo" /> 
      </Link>

      <ul className="navbar-links">
        {}
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/category/iluminacion" className={({ isActive }) => isActive ? "active-link" : ""}>Iluminación</NavLink>
        </li>
        <li>
          <NavLink to="/category/climatizacion" className={({ isActive }) => isActive ? "active-link" : ""}>Climatización</NavLink>
        </li>
        <li>
          <NavLink to="/category/seguridad" className={({ isActive }) => isActive ? "active-link" : ""}>Seguridad</NavLink>
        </li>
        {}
      </ul>
      <CardWidget />
    </div>
  );
};

export default Navbar;
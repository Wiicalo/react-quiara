import "./navbar.css"; 
import smartlogo from "../assets/smartlogo.png";
import CardWidget from "./CarWidget.jsx";


const Navbar = () => {
    return (
        <div className= "navbar-container">
            <img className= "logo" src={smartlogo} alt="Smart Logo" />

            <ul className="navbar-links">
                <li>Inicio</li>
                <li>Servicios</li>
                <li>Productos</li>
                <li>Contacto</li>
            </ul>
            
          <CardWidget />
           
        </div> 
    )
}
export default Navbar;
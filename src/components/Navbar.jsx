
import { NavLink } from "react-router-dom";
import style  from "../Styles/navbar.module.scss";

export function Navbar(){
   return(
     < nav className={style.navBar}>
     <ul>
         <li>
            <NavLink to="/">Forside</NavLink>
         </li>
         <li>
            <NavLink to="/products">Produkter</NavLink>
         </li>
         <li>
            <h4>bageriet</h4>
         </li>
            <li>
            <NavLink to="/contact">Kontakt</NavLink>
            </li>
            <li>
            <NavLink to="/login">Login</NavLink>
            </li>

     </ul>
     </nav>
   )

}

import { NavLink } from "react-router-dom";
import "./Hamburger.css"

export default function HamburgerMenu(){
    return <div className="hamburger-menu">
        <nav>
          <NavLink className="ham-link1" to="/products/shoes">
            SHOES
          </NavLink>
          <NavLink className="ham-link1" to="/products/t-shirts">
            T-SHIRT
          </NavLink>
          <NavLink className="ham-link1" to="/products/lowers">
            LOWER
          </NavLink>
          <NavLink className="ham-link1" to="/products/football">
            FOOTBALL
          </NavLink>
      </nav>
    </div>
}
import { useNavigate } from "react-router-dom";
import "./Hamburger.css";

export default function HamburgerMenu({hamSetter}) {
  const navigate = useNavigate();

  const navigateTo = (endPoint) => {
    hamSetter(false);
    navigate(`/${endPoint}`);
  }

  return (
    <div className="hamburger-menu">
      <nav>
        <button className="ham-buttons" onClick={()=>navigateTo("login")}>Login</button>
        <button className="ham-buttons" onClick={()=>navigateTo("signup")}>Signup</button>
        <button className="ham-buttons" onClick={()=>navigateTo("cart")}>cart</button>
        <button className="ham-buttons" onClick={()=>navigateTo("wishlist")}>Wishlist</button>
        <button className="ham-buttons" onClick={()=>navigateTo("products/shoes")}>Shoes</button>
        <button className="ham-buttons" onClick={()=>navigateTo("products/t-shirts")}>T-shirt</button>
        <button className="ham-buttons" onClick={()=>navigateTo("products/lowers")}>Lower</button>
        <button className="ham-buttons" onClick={()=>navigateTo("products/football")}>Football</button>
      </nav>
    </div>
  );
}

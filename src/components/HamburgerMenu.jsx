import { useNavigate } from "react-router-dom";
import "./Hamburger.css";
import { useContext } from "react";
import { useAuth } from "..";

export default function HamburgerMenu({hamSetter}) {
  const navigate = useNavigate();
  const {isLoggedIn, setLoggenIn} = useContext(useAuth)

  const navigateTo = (endPoint) => {
    hamSetter(false);
    navigate(`/${endPoint}`);
  }

  const logoutHandler = () => {
    localStorage.removeItem("encodedToken");
    setLoggenIn(false);
    navigate("/");
  }

  return (
    <div className="hamburger-menu">
      <nav>
        {isLoggedIn ? <button className="ham-buttons" onClick={logoutHandler}>Logout</button>
        :<><button className="ham-buttons" onClick={()=>navigateTo("login")}>Login</button>
        <button className="ham-buttons" onClick={()=>navigateTo("signup")}>Signup</button></>}
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

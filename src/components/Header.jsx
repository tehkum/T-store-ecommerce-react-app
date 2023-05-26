import { NavLink } from "react-router-dom";
import "./Header.css";
import SearchBar from "./SearchBar";
import logo from "../images/logo.png";
import HamburgerMenu from "./HamburgerMenu";
import { useContext, useState } from "react";
import { useCart } from "../context/CartProvider";
import { useWishlist } from "../context/WishlistProvider";

export default function Header() {
  const [showHamburger, setHamburger] = useState(false);
  const { cartState } = useContext(useCart);
  const { wishlistState } = useContext(useWishlist);

  return (
    <>
      <div className="above-nav">
        FREE DELIVERY AND 15% DISCOUNT ON YOUR FIRST ORDER.
      </div>
      <nav>
        <NavLink className="Logo" to="/">
          <img src={logo} alt="..." width="50px" />
        </NavLink>
        <span className="product-link">
          <NavLink className="link1" to="/products/shoes" style={({isActive})=> isActive ? {fontWeight: "bold"}: {fontWeight: "normal"}}>
            SHOES
          </NavLink>
          <NavLink className="link1" to="/products/t-shirts" style={({isActive})=> isActive ? {fontWeight: "bold"}: {fontWeight: "normal"}}>
            T-SHIRT
          </NavLink>
          <NavLink className="link1" to="/products/lowers" style={({isActive})=> isActive ? {fontWeight: "bold"}: {fontWeight: "normal"}}>
            LOWER
          </NavLink>
          <NavLink className="link1" to="/products/football" style={({isActive})=> isActive ? {fontWeight: "bold"}: {fontWeight: "normal"}}>
            FOOTBALL
          </NavLink>
        </span>
        <div className="icon-navs">
          <span className="navigation-links">
            <div className="hidden-bar">
              <SearchBar />
            </div>
          </span>
          <NavLink className="navigation-links link2" to="/Login">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-filled/100/user-male-circle.png"
              alt="user-male-circle"
            />
          </NavLink>
          <NavLink className="navigation-links link2" to="/wishlist">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/material-outlined/96/like--v1.png"
              alt="like--v1"
            />
            <p>{wishlistState?.mainWish?.length ?? ""}</p>
          </NavLink>
          <NavLink className="navigation-links link3" to="/cart">
            <img
              width="30px"
              height="30px"
              src="https://img.icons8.com/material-outlined/96/shopping-bag--v1.png"
              alt="shopping-bag--v1"
            />
            <p>{cartState?.mainCart?.length ?? ""}</p>
          </NavLink>
        </div>
        <div className="search-sm-hidden">
          <SearchBar />
        </div>
        {showHamburger ? (
          <button className="hamburger" onClick={() => setHamburger(false)}>
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios/100/multiply.png"
              alt="multiply"
            />
          </button>
        ) : (
          <button className="hamburger" onClick={() => setHamburger(true)}>
            |||
          </button>
        )}
      </nav>
      {showHamburger && (
        <div className="hidden-big">
          <HamburgerMenu hamSetter={setHamburger} />
        </div>
      )}
    </>
  );
}

import { useContext } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export default function Footer() {
  const {isLoggedIn} = useContext(useAuth);
  return (
    <footer>
      
        {isLoggedIn ?<div className="footer-top-layer">
          <span>AVAIL OFFER. COUPON CODE: </span>
        <span>
          <Link className="footer-tl-link">MYFIRST</Link>
        </span>
      </div> :
      <div className="footer-top-layer">
        <span>JOIN ADIDAS AND GET 15% OFF</span>
        <span>
          <Link className="footer-tl-link"  to="/signup">SIGN UP FOR FREE</Link>
        </span>
      </div>}
      {/* ********************************************************** */}
      <div className="footer-mid-layer">
        <div className="side-one-footer">
          <h3>Products</h3>
          <p>All Products</p>
          <p>Shoes</p>
          <p>T-shirts</p>
          <p>Lowers</p>
          <p>Football</p>
        </div>
        <div className="side-one-footer">
          <h3>Products</h3>
          <p>All Products</p>
          <p>Shoes</p>
          <p>T-shirts</p>
          <p>Lowers</p>
          <p>Football</p>
        </div>
        <div className="side-one-footer">
          <h3>Products</h3>
          <p>All Products</p>
          <p>Shoes</p>
          <p>T-shirts</p>
          <p>Lowers</p>
          <p>Football</p>
        </div>
        <div className="side-one-footer">
          <h3>Follow Me</h3>
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/ios-filled/100/instagram-new--v1.png"
            alt="instagram-new--v1"
          />
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/ios-filled/100/linkedin.png"
            alt="linkedin"
          />
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/ios-filled/100/twitter-squared.png"
            alt="twitter-squared"
          />
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/ios-filled/100/facebook--v1.png"
            alt="facebook--v1"
          />
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/windows/96/github.png"
            alt="github"
          />
        </div>
      </div>
      {/* ********************************************************** */}
      <div className="footer-last-layer">
        <div>
          Cookie Setting | Terms and Conditions | Privacy Policy | Cookies
        </div>
        <div className="copyright">©2023 copyright by Tehkum</div>
      </div>
    </footer>
  );
}

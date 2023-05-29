import { Link } from "react-router-dom";
import "./AuthPages.css";
import { useAuth } from "../context/AuthProvider";
import { useContext, useEffect } from "react";


export default function SignupPage() {
  const { signupHandler, setSignup } = useContext(useAuth);

  useEffect(()=>{
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: "smooth",
    });
  },[])


  return (
    <>
      <div className="login-container">
        <div className="part1-login">
          <h1>SIGN UP</h1>
          <p>
            Already a customer? <Link className="fgt-pass" to="/login">Log In</Link>
          </p>
          <label htmlFor="login-mail">
            <input
              type="email"
              id="login-mail"
              placeholder="Email*"
              className="field-inp"
              onChange={e=>setSignup("email",e.target.value)}
            /></label>
          <label htmlFor="login-name">
            <input
              type="text"
              id="login-mail"
              placeholder="Full name*"
              onChange={e=>setSignup("name",e.target.value)}
              className="field-inp"
            />
          </label>
          <label htmlFor="login-phone">
            <input
              type="number"
              id="login-phone"
              placeholder="Phone no.*"
              onChange={e=>setSignup("phone",e.target.value)}
              className="field-inp"
            />
          </label>
          <label htmlFor="login-pass">
            <input
              type="passsword"
              id="login-pass"
              placeholder="Password*"
              onChange={e=>setSignup("password",e.target.value)}
              className="field-inp"
            />
          </label>
          <label htmlFor="login-pass-cnf">
            <input
              type="passsword"
              id="login-pass-cnf"
              placeholder="Confirm Password*"
              className="field-inp"
            />
          </label>
          <label htmlFor="keep-log-in">
            <input type="checkbox" id="keep-log-in" />
            Keep me Signed in
          </label>
          <button className="button-login btn-secondary" onClick={signupHandler}>Signup</button>
          <button className="button-login btn-primary">
            Login with test credentials
          </button>
          <p>
            By clicking "Signup", I agree to the Terms & Conditions, the adiClub
            Terms & Conditions and the adidas Privacy Policy.
          </p>
        </div>
        <div className="part2-login">
          <h1>JOIN THE CLUB. GET BENEFITS.</h1>
          <p>JOIN TEHCLUB. GET REWARDED TODAY.</p>
          {[
            "Free delivery",
            "A 15% off voucher for your next purchase",
            "Access to Members Only products and sales",
            "Access to adidas Running and Training apps",
            "Special offers and promotions"
          ].map((sentence) => (
            <li>
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/ios-filled/100/checked-checkbox.png"
                alt="checked-checkbox"
              />
              {sentence}
            </li>
          ))}
          <p>
            Join now to start earning points, reach new levels and unlock more
            rewards and benefits from adiClub.
          </p>
          <button className="button-login btn-primary" >SHOP NOW</button>
        </div>
      </div>
    </>
  );
}

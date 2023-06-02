import { Link } from "react-router-dom";
import "./AuthPages.css";
import { useAuth } from "../context/AuthProvider";
import { useContext, useEffect, useState } from "react";
import AlertBox from "../components/AlertBox";


export default function SignupPage() {
  const { signupHandler, setSignup, signupDetails } = useContext(useAuth);
  const [ confirmPassword, setConfirmPassword ] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [ btnClicked, setClicked ] = useState({
    clicked: true,
    message: ""
  }) 

  useEffect(()=>{
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: "smooth",
    });
  },[])

  const  clickChecker = () => {
    if(signupDetails.password !== confirmPassword ){
      setClicked({clicked: !btnClicked.clicked, message: "Password didnt matched "})
    } else if(!signupDetails.email.split("").includes("@")){
      setClicked({clicked: !btnClicked.clicked, message: "Email invalid"})
    }
    else {
      signupHandler();
    }
  }



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
          <label htmlFor="login-pass" className="show-pass-login">
            <input
              type={showPass ? "text" : "password"}
              id="login-pass"
              placeholder="Password*"
              onChange={e=>setSignup("password",e.target.value)}
              className="field-inp"
            />
            {showPass ? (
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/material-rounded/96/hide.png"
                onClick={() => {
                  setShowPass(!showPass);
                }}
                alt="hide"
                className="show-icon-login"
              />
            ) : (
              <img
                width="30"
                height="30"
                onClick={() => {
                  setShowPass(!showPass);
                }}
                src="https://img.icons8.com/material-sharp/96/visible.png"
                alt="visible"
                className="show-icon-login"
              />
            )}
          </label>
          <label htmlFor="login-pass-cnf">
            <input
              type={showPass ? "text" : "password"}
              id="login-pass-cnf"
              placeholder="Confirm Password*"
              onChange={e=>setConfirmPassword(e.target.value)}
              className="field-inp"
            />
          </label>
          <label htmlFor="keep-log-in">
            <input type="checkbox" id="keep-log-in" />
            Keep me Signed in
          </label>
          <button className="button-login btn-secondary" onClick={clickChecker}>Signup</button>
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
      <AlertBox clicked={btnClicked.clicked} alertMessage={btnClicked.message}/>
    </>
  );
}

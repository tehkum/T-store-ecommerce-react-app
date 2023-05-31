import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import "./AuthPages.css";
import AlertBox from "../components/AlertBox";

export default function LoginPage() {
  const { loginHandler, loginDetails,setLoginDetails, mainLoginHandler, loginError } = useContext(useAuth);
  const [ isEmpty , setEmpty ] = useState({
    loginEmail : false,
    emptyMessage: "",
    loginPass: false,
  });
  const [ buttonClicked, setClicked ] = useState(false)

  const clickHandler = () => {
    setClicked(!buttonClicked);
    if(!loginDetails.email.length || !loginDetails.password.length){
    if(!loginDetails.email.length){
      if(!loginDetails.password.length){
        setEmpty({loginEmail : true, loginPass: true, emptyMessage: "Email and password field empty"})
      }else{
        setEmpty({...isEmpty, loginEmail: true, emptyMessage: "Email field empty"})
      }
    }
    else if(!loginDetails.password.length){
      setEmpty({...isEmpty, loginPass: true, emptyMessage: "Password field empty"})
    }}
    else{
    if(loginDetails.email.split("").includes("@")){
      mainLoginHandler();}
      else{
        setEmpty({...isEmpty, emptyMessage: "Email invalid"})
      }
    }
  }

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
          <h1>LOG IN</h1>
          <Link className="fgt-pass">Forgotten your password?</Link>
          <p>
            New Customer?{" "}
            <Link className="fgt-pass" to="/signup">
              Sign Up
            </Link>
          </p>
          <label htmlFor="login-mail">
            <input
              style={isEmpty.loginEmail ? {border: "2px solid red"} : {border: "1px solid #666666"}}
              type="email"
              id="login-mail"
              placeholder="Email*"
              className="field-inp"
              onChange={event=>{
                setEmpty({
                  loginEmail : false,
                  emptyMessage: "",
                })
                setLoginDetails({...loginDetails, email: event.target.value})
              }}
            />
          </label>
          <label htmlFor="login-pass">
            <input
              style={isEmpty.loginPass ? {border: "2px solid red"} : {border: "1px solid #666666"}}
              type="password"
              id="login-pass"
              placeholder="Password*"
              className="field-inp"
              onChange={event=>{
                setEmpty({
                  emptyMessage: "",
                  loginPass: false,
                })
                setLoginDetails({...loginDetails, password: event.target.value})
              }}
            />
          </label>
          <label htmlFor="keep-log-in">
            <input type="checkbox" id="keep-log-in" />
            Keep me logged in
          </label>
          {/* <p style={{color: "red"}}>{isEmpty?.emptyMessage?.length ? isEmpty?.emptyMessage : ""}</p> */}
          <button className="button-login btn-secondary" onClick={clickHandler}>Login</button>
          <button className="button-login btn-primary" onClick={loginHandler}>
            Login with test credentials
          </button>
          {/* <p style={{color: "red"}}>{loginError ? loginError : ""}</p> */}
          <p>
            By clicking "LOG IN", I agree to the Terms & Conditions, the adiClub
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
          <button className="button-login btn-primary">SHOP NOW</button>
        </div>
      </div>
      <AlertBox alertMessage={isEmpty?.emptyMessage} clicked={buttonClicked}/>
      <AlertBox alertMessage={loginError} clicked={buttonClicked}/>
    </>
  );
}

import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router";

export const useAuth = createContext();

export function AuthContext({ children }) {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: ""
  });
  const [signupDetails, setSignupDetails] = useState({
    password: "",
    email: "",
    name: "",
    phone: ""
  })
  const [isLoggedIn, setLoggenIn] = useState(false);
  // const [location, setLocation] = useState
  const navigate = useNavigate();
  const location = useLocation();

  const loginHandler = async () => {
    try {
      const testCred = {
        "email": "adarshbalika@gmail.com",
        "password": "adarshbalika"
      }
      const res = await fetch("/api/auth/login",{
        method: "POST",
        body: JSON.stringify(testCred)
      });
      // console.log(await res.json());
      const { encodedToken } = await res.json();
      localStorage.setItem("encodedToken", encodedToken);
      setLoggenIn(true);
      navigate(location?.state?.from?.pathname || "/");
      
    } catch (error) {
      console.log(error)
    }
  }
  const mainLoginHandler = async () => {
    try {
      const res = await fetch("/api/auth/login",{
        method: "POST",
        body: JSON.stringify(loginDetails)
      });
      const { encodedToken } = await res.json();
      localStorage.setItem("encodedToken", encodedToken);
      setLoggenIn(true);
      navigate(location?.state?.from?.pathname || "/");
      
    } catch (error) {
      console.log(error)
    }
  }

  const setSignup = (type, data) => {
    signupDetails[type] = data;
    console.log(signupDetails, data)
    setSignupDetails({...signupDetails})
  }

  const signupHandler = async () => {
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        data: JSON.stringify(signupDetails)
      })
      const { encodedToken } = await res.json()
      localStorage.setItem("encodedToken", encodedToken)
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <useAuth.Provider value={{ isLoggedIn, setLoggenIn, loginHandler, setLoginDetails, loginDetails, signupHandler, setSignup, mainLoginHandler }}>
      {children}
    </useAuth.Provider>
  );
}

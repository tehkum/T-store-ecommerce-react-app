import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";

export const useAuth = createContext();

export function AuthContext({ children }) {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [signupDetails, setSignupDetails] = useState({
    password: "",
    email: "",
    name: "",
    phone: "",
  });
  const [isLoggedIn, setLoggenIn] = useState(false);
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const loginHandler = async () => {
    try {
      const testCred = {
        email: "adarshbalika@gmail.com",
        password: "adarshbalika",
      };
      const { data, status } = await axios.post("/api/auth/login", testCred);
      if (status === 200) {
        localStorage.setItem("encodedToken", data.encodedToken);
        setLoggenIn(true);
        navigate(location?.state?.from?.pathname || "/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const mainLoginHandler = async () => {
    try {
      const res = await axios.post("/api/auth/login", loginDetails);
      if (res.status === 200) {
        localStorage.setItem("encodedToken", res.data.encodedToken);
        setLoggenIn(true);
        navigate(location?.state?.from?.pathname || "/");
      }
    } catch (error) {
      console.log(error);
      if (error.request.status === 401) {
        setLoginError("WRONG PASSWORD");
      } else {
        setLoginError("USER NOT FOUND");
      }
    }
  };

  const setSignup = (type, data) => {
    signupDetails[type] = data;
    setSignupDetails({ ...signupDetails });
  };

  const signupHandler = async () => {
    try {
      const res = await axios.post("/api/auth/signup", signupDetails);
      console.log(res);
      if (res?.status === 201) {
        localStorage.setItem("encodedToken", res?.data?.encodedToken);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <useAuth.Provider
      value={{
        isLoggedIn,
        signupDetails,
        setLoggenIn,
        loginHandler,
        setLoginDetails,
        loginDetails,
        signupHandler,
        setSignup,
        mainLoginHandler,
        loginError,
      }}
    >
      {children}
    </useAuth.Provider>
  );
}

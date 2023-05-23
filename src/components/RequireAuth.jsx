import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { useAuth } from "..";

export default function RequireAuth({ children }) {
  const { isLoggedIn } = useContext(useAuth);
  const location = useLocation();
  // console.log(location);
  return (isLoggedIn && (localStorage.getItem("encodedToken"))) ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}

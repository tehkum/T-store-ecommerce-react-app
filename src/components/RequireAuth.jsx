import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { useAuth } from "..";

export default function RequireAuth({ children }) {
  const { isLoggedIn } = useContext(useAuth);
  const location = useLocation();
  return (isLoggedIn || (localStorage.getItem("encodedToken"))) ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}

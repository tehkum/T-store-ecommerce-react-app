import { Routes, Route } from "react-router-dom";
// import { Navigate } from "react-router";
import RequireAuth from "../components/RequireAuth";
import { CartPage } from "../pages/protected/CartPage";
import { HomePage } from "../pages/HomePage";
import LoginPage from "../pages/Login";
import { Product } from "../pages/Product";
import { Products } from "../pages/Products";
import SignupPage from "../pages/Signup";
import { Wishlist } from "../pages/protected/WishlistPage";
import Mockman from "mockman-js";
import Address from "../pages/protected/Address";
import { useContext } from "react";
import { useAuth } from "../context/AuthProvider";

export default function RouterRoutes() {
  const { isLoggedIn } = useContext(useAuth);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products/:productCat" element={<Products />} />
      <Route path="/product/:productId" element={<Product />} />
      <Route path="/mockman" element={<Mockman />} />
      <Route
        path="/cart"
        element={
          <RequireAuth>
            <CartPage />
          </RequireAuth>
        }
      />
      <Route
        path="/wishlist"
        element={
          <RequireAuth>
            <Wishlist />
          </RequireAuth>
        }
      />
      <Route path="/address" element={<RequireAuth>
            <Address />
          </RequireAuth>} />
      <Route path="/login" element={!isLoggedIn ? <LoginPage /> : <HomePage />} />  
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
}

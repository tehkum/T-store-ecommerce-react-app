// import { StrictMode } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import { makeServer } from "./server";

import App from "./App";
import { AuthContext, useAuth } from "./context/AuthProvider";
import { ProductProvider, useProducts } from "./context/ProductProvider";
import { CartProvider, useCart } from "./context/CartProvider";
import { FilterContext, useFilter } from "./context/filterProvider";
import { WishlistContext, useWishlist } from "./context/WishlistProvider";
import { AddressProvider, useAddress } from "./context/AddressProvider";

export { useProducts, useAuth, useCart, useFilter, useWishlist, useAddress };

makeServer();

ReactDOM.render(
  // <StrictMode>
  <Router>
    <AuthContext>
      <ProductProvider>
        <CartProvider>
          <FilterContext>
            <WishlistContext>
              <AddressProvider>
                <App />
              </AddressProvider>
            </WishlistContext>
          </FilterContext>
        </CartProvider>
      </ProductProvider>
    </AuthContext>
  </Router>,
  // </StrictMode>
  document.getElementById("root")
);

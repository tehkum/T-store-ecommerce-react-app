import { useContext } from "react";

import WishlistProductCard from "../../components/wishlistProductCard";
import "../Products.css";
import { useWishlist } from "../../context/WishlistProvider";


export function Wishlist() {
  const { wishlistState } = useContext(useWishlist);

  return (
    <>
      <div className="top-products-desc">
        <h1>
          <i>WISHLIST</i>
        </h1>
        <p>
          Total items: []
        </p>
      </div>
      {/* *************************************************************************** */}
      <div className="products-container">
        {wishlistState?.mainWish?.map((item) => {
          const { _id, title, type, price, image } = item;
          return (
            <WishlistProductCard
              id={_id}
              image={image}
              price={price}
              category={type}
              title={title}
            />
          );
        })}
      </div>
    </>
  );
}

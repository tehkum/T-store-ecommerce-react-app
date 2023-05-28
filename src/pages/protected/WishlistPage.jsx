import { useContext } from "react";

import WishlistProductCard from "../../components/wishlistProductCard";
import "../Products.css";
import { useWishlist } from "../../context/WishlistProvider";
import LoadingCard from "../../components/LoadingCard";


export function Wishlist() {
  const { wishlistState } = useContext(useWishlist);

  return (
    <>
      <div className="top-products-desc">
        <h1>
          <i>WISHLIST</i>
        </h1>
        <p>
          Total items: [{wishlistState?.mainWish?.lenght ?? 0}]
        </p>
        {!wishlistState?.mainWish?.lenght && <h3>Wishlist is empty</h3>}
      </div>
      {/* *************************************************************************** */}
      <div className="products-container">
        {wishlistState?.wishlistLoad ? <><LoadingCard/><LoadingCard/><LoadingCard/><LoadingCard/><LoadingCard/><LoadingCard/></> : wishlistState?.mainWish?.map((item) => {
          const { _id, title, type, price, image, description } = item;
          return (
            <WishlistProductCard
              id={_id}
              image={image}
              price={price}
              category={type}
              title={title}
              description={description}
            />
          );
        })}
      </div>
    </>
  );
}

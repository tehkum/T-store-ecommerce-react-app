import { useContext, useEffect } from "react";

import WishlistProductCard from "../../components/wishlistProductCard";
import "../Products.css";
import { useWishlist } from "../../context/WishlistProvider";
import LoadingCard from "../../components/LoadingCard";

export function Wishlist() {
  const { wishlistState } = useContext(useWishlist);

  useEffect(() => {
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <div className="top-wishlist-desc">
        <h1>
          <i>WISHLIST</i>
        </h1>
        <p>Total items: [{wishlistState?.mainWish?.length}]</p>
        {!wishlistState?.mainWish?.length && <h3>Wishlist is empty</h3>}
      </div>
      {/* *************************************************************************** */}
      <div className="products-container">
        {wishlistState?.wishlistLoad ? (
          <>
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
          </>
        ) : (
          wishlistState?.mainWish?.map((item) => {
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
          })
        )}
      </div>
    </>
  );
}

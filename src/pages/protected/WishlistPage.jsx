import { useContext, useEffect, useState } from "react";

import WishlistProductCard from "../../components/wishlistProductCard";
import "../Products.css";
import { useWishlist } from "../../context/WishlistProvider";
import axios from "axios";


export function Wishlist() {
  const [ inWishList, setWishlist ] = useState([])
  const { wishlistState } = useContext(useWishlist);


  const fetchDetails = async () => {
    try {
      const { data } = await axios.get("/api/user/wishlist",{
        headers: {
          authorization: localStorage.getItem("encodedToken")
        }
      });
      setWishlist(await data.wishlist)
    } catch (error) {
      console.log(error);
    }
  } 
  


  useEffect(()=>{
    fetchDetails();
  },[wishlistState?.wishlistData])

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
        {inWishList?.map((item) => {
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

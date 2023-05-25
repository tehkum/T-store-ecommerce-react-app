import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
// import front1 from "../images/frontpage-box2.jpg"
import "./Product.css";
import { useCart } from "../context/CartProvider";
import { useWishlist } from "../context/WishlistProvider";
// import h1 from "../images/h1.png";
// import h2 from "../images/h2.png";

export function Product() {
  const { productId } = useParams();
  const [specificProduct, setProduct] = useState({});
  const { cartDispatch } = useContext(useCart);
  const { wishlistDispatch } = useContext(useWishlist);
  const [cartLoading, setCartLoading] = useState(false);
  const [wishlistLoading, setWishlistLoading] = useState(false);

  const fetchDetails = async () => {
    try {
      const data = await fetch(`/api/products/${productId}`);
      const fullData = await data.json();
      setProduct(fullData.product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    fetchDetails();
  });

  const clickHandler = async () => {
    setCartLoading(true)
    await cartDispatch({type:"add-to-cart", data: specificProduct});
    setCartLoading(false);
  }
  const wishlistClickHandler = async () => {
    setWishlistLoading(true)
    await wishlistDispatch({type:"add-to-wishlist", data: specificProduct})
    setWishlistLoading(false);
  }

  const { title, type, image, image2, image3, image4, price, description } = specificProduct;

  return <>
    <div className="container-product">
      <div className="card-right">
        <img src={image} alt="..."/>
        <img src={image2} alt="..."/>
        <img src={image3} alt="..."/>
        <img src={image4} alt="..."/>
      </div>
      <div className="card-left">
        <p className="product-type">{type}</p>
        <h1 className="product-title">{title}</h1>
        <p className="product-price-desc"><b>MRP in Indian currency:</b></p>
        <p className="product-price">{price} per pair</p>
        <p className="product-tax">[Inclusive of all taxes]</p>
        <p>{description}</p>
        <p className="product-stock"><b>In stock:</b> Out of stock</p>
        <p><b>Sizes:</b></p>
        <div className="Size-box">
          <p>4</p>
          <p>5</p>
          <p>5.5</p>
          <p>6</p>
          <p>6.5</p>
          <p>7</p>
          <p>7.5</p>
          <p>8</p>
        </div>
        <button className="cart-btn" disabled={cartLoading} onClick={clickHandler}>Add to cart</button>
        <button className="wishlist-btn" disabled={wishlistLoading} onClick={wishlistClickHandler}>ht</button>        
      </div>
    </div>
  </>;
}

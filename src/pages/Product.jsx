import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import "./Product.css";
import { useCart, useWishlist } from "..";
import AlertBox from "../components/AlertBox";
import ProductPageLoad from "../components/ProductPageLoad";

export function Product() {
  const { productId } = useParams();
  const [specificProduct, setProduct] = useState({});
  const { cartDispatch } = useContext(useCart);
  const { wishlistDispatch } = useContext(useWishlist);
  const [ productLoad, setProductLoading ] = useState(false);
  const [cartLoading, setCartLoading] = useState(false);
  const [wishlistLoading, setWishlistLoading] = useState(false);
  const [ btnClicked, setClicked ] = useState({
    clicked: true,
    message: "",
  });

  const fetchDetails = async () => {
    try {
      setProductLoading(true);
      const data = await fetch(`/api/products/${productId}`);
      const fullData = await data.json();
      setProduct(fullData?.product);
      setTimeout(()=>setProductLoading(false),500);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    fetchDetails();
  },[]);

  useEffect(()=>{
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: "smooth",
    });
  },[])

  const clickHandler = async () => {
    setClicked({clicked: !btnClicked.clicked, message: "Added to Cart"})
    setCartLoading(true)
    await cartDispatch({type:"add-to-cart", data: specificProduct});
    setTimeout(async () => {
      setCartLoading(false)
    },1500)
  }
  const wishlistClickHandler = async () => {
    setClicked({clicked: !btnClicked.clicked, message: "Added to Wishlist"})
    setWishlistLoading(true)
    await wishlistDispatch({type:"add-to-wishlist", data: specificProduct})
    setTimeout(async ()=> {
    setWishlistLoading(false);
    },1500)
  }

  const { title, type, image, image2, image3, image4, price, description, stock } = specificProduct;

  return productLoad ? <ProductPageLoad /> :<>
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
        <p className="product-desc">{description}</p>
        <p className="product-stock"><b>In stock:</b> {stock}</p>
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
        <AlertBox alertMessage={btnClicked.message} clicked={btnClicked.clicked}/>       
      </div>
    </div>
  </>;
}

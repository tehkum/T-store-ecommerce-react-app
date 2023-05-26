import { useParams } from "react-router-dom";
import { useContext } from "react";

import { useProducts } from "../context/ProductProvider";
import ProductCard from "../components/ProductCard";
import "./Products.css";
import { useFilter } from "../context/filterProvider";
import FilterBox from "../components/FilterBox";

export function Products() {
  const { productCat } = useParams();
  const { productData, loading } = useContext(useProducts);
  const { filterState } = useContext(useFilter);


  const filteredProduct =
    productCat === "all"
      ? productData
      : productData.filter(({ category }) => category === productCat);

  const priceFilter = filterState.radioFilter
    ? filteredProduct.sort((a, b) => {
        if (filterState.priceFilterValue === "h2l") {
          return b.price - a.price;
        } else return a.price - b.price;
      })
    : filteredProduct;

  const starFilter = filterState.starFilter
    ? priceFilter.filter(({ rating }) => rating >= +filterState.starFilterValue)
    : priceFilter;

  const searchFilter = filterState.searchFilterValue ? starFilter.filter(({title})=> title.toLowerCase().includes(filterState.searchFilterValue.toLowerCase())) : starFilter 

  const rangeFilter = searchFilter.filter(({price})=> +price <= +filterState.rangeValue);

  return (loading ? <h1>...loading</h1> :
    <>
      <div className="top-products-desc">
        <h1>
          <i>{productCat.toUpperCase()}</i>
        </h1>
      </div>
      {/* *************************************************************************** */}
      <FilterBox productData={productData} productCat={productCat}/>
      {/* *************************************************************************** */}
      <div className="products-container">
        {rangeFilter.map((item) => {
          const { _id, title, type, price, image } = item;
          return (
            <ProductCard
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

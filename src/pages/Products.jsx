import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";

import { useProducts, useFilter } from "..";
import ProductCard from "../components/ProductCard";
import "./Products.css";
import FilterBox from "../components/FilterBox";
import LoadingCard from "../components/LoadingCard";

export function Products() {
  const { productCat } = useParams();
  const { productData, loading } = useContext(useProducts);
  const { filterState, filterDispatch } = useContext(useFilter);

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

  const searchFilter = filterState.searchFilterValue
    ? starFilter.filter(({ title }) =>
        title
          .toLowerCase()
          .includes(filterState.searchFilterValue.toLowerCase())
      )
    : starFilter;

  const rangeFilter = searchFilter.filter(
    ({ price }) => +price <= +filterState.rangeValue
  );

  useEffect(()=>{
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: "smooth",
    });
  },[productCat])

  return (
    <>
      <div className="top-products-desc">
        <h1>
          <i>{productCat.toUpperCase()}</i>
        </h1>
        <button
        className={filterState.showFilter ? "dis-hidden" : "btn-showFilter"}
        onClick={() => filterDispatch({ type: "filterTrue" })}
      >Show Filter</button>
      </div>
      {/* *************************************************************************** */}
      <FilterBox productData={productData} productCat={productCat} />
      {/* *************************************************************************** */}
      <div className="products-container">
        {loading ? (
          <>
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
          </>
        ) : (
          rangeFilter.map((item) => {
            const { _id, title, type, price, image, description } = item;
            return (
              <ProductCard
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

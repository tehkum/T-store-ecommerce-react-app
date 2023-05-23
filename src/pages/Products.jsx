import { useParams } from "react-router-dom";
import { useContext } from "react";

import { useProducts } from "../context/ProductProvider";
import ProductCard from "../components/ProductCard";
import "./Products.css";
import { useFilter } from "../context/filterProvider";

export function Products() {
  const { productCat } = useParams();
  const { productData } = useContext(useProducts);
  const { filterState, filterDispatch } = useContext(useFilter);

  const shoeDesc =
    "adidas sneakers for men sit right at the apex of where technology meets fashion in the world of superior footwear. Do right by your feet every day, the 3-Stripes way";
  const tshirtDesc =
    "Find your perfect men's t-shirt - from colourful pastels to iconic adidas designs, you'll find what you're looking for. Featuring moisture-wicking fabrics and advanced technologies, you'll stay comfortable, even when training hard.";

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

  return (
    <>
      <div className="top-products-desc">
        <h1>
          <i>{productCat.toUpperCase()}</i>
        </h1>
        <p>
          {productCat === "shoes"
            ? shoeDesc
            : productCat === "t-shirts"
            ? tshirtDesc
            : productCat === "lowers"
            ? ""
            : ""}
        </p>
      </div>
      {/* *************************************************************************** */}
      
      <div className="filter-box-products">
        <button className={filterState.showFilter ? "dis-hidden" : "btn-showFilter"} onClick={()=>filterDispatch({type: "filterTrue"})}>Show Filters</button>
        <div className={!filterState.showFilter ? "dis-hidden" : "radio-filter"}>
          <h3>Price Filter</h3>
          <label htmlFor="price1-filter">
            <input
              type="radio"
              id="price1-filter"
              name="price-filter"
              value="h2l"
              checked={filterState.priceFilterValue === "h2l"}
              onChange={(event) =>
                filterDispatch({
                  type: "price-filter",
                  filterType: "h2l",
                  filterVal: event.target.value,
                })
              }
            />
            Price-(high to low)
          </label>
          <label htmlFor="price2-filter">
            <input
              type="radio"
              id="price2-filter"
              name="price-filter"
              value="l2h"
              checked={filterState.priceFilterValue === "l2h"}
              onChange={(event) =>
                filterDispatch({
                  type: "price-filter",
                  filterType: "l2h",
                  filterVal: event.target.value,
                })
              }
            />
            Price-(low to high)
          </label>
        </div>
        <div className={!filterState.showFilter ? "dis-hidden" : "range-filter"}>
          <h3>Set Range</h3>
          0
          <input
            type="range"
            min="0"
            max="5000"
            value={filterState.rangeValue}
            step="100"
            onChange={(event) => filterDispatch({ type: "range-filter", rangeFilterVal: event.target.value })}
          />
          5000
        </div>
        <div className={!filterState.showFilter ? "dis-hidden" : "rating-filter"}>
          <h3>Set Rating</h3>
          <label htmlFor="rating-1">
            <input
              type="radio"
              id="rating-1"
              name="star-rating"
              value="4.5"
              checked={filterState.starFilterValue === "4.5"}
              onChange={() =>
                filterDispatch({ type: "star-filter", filterType: "4.5" })
              }
            />
            4.5+
          </label>
          <label htmlFor="rating-2">
            <input
              type="radio"
              id="rating-2"
              name="star-rating"
              value="4"
              checked={filterState.starFilterValue === "4"}
              onChange={() =>
                filterDispatch({ type: "star-filter", filterType: "4" })
              }
            />
            4.0+
          </label>
          <label htmlFor="rating-3">
            <input
              type="radio"
              id="rating-3"
              name="star-rating"
              value="3.5"
              checked={filterState.starFilterValue === "3.5"}
              onChange={() =>
                filterDispatch({ type: "star-filter", filterType: "3.5" })
              }
            />
            3.5+
          </label>
          <label htmlFor="rating-4">
            <input
              type="radio"
              id="rating-4"
              name="star-rating"
              value="3"
              checked={filterState.starFilterValue === "3"}
              onChange={() =>
                filterDispatch({ type: "star-filter", filterType: "3" })
              }
            />
            3+
          </label>
        </div>
        {filterState.clearFilter && <button className={!filterState.showFilter ? "dis-hidden" : "btn-hideFilter"} onClick={()=>filterDispatch({type: "filterFalse"})}>hide Filters</button>}
        {!filterState.clearFilter && <button className={!filterState.showFilter ? "dis-hidden" : "btn-hideFilter"} onClick={()=>filterDispatch({type: "clear-filter"})}>clear Filters</button>}
      </div>
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

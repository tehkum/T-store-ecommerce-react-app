import { useContext } from "react";
import { useFilter } from "../context/filterProvider";
import "./Filter.css";

export default function FilterBox({ productData, productCat }) {
  const { filterState, filterDispatch } = useContext(useFilter);

  return (
    <>
      <div className={filterState.showFilter ? "filter-side-box" : "dis-hidden"}>
        <div className="button-cross">
        <img width="30" height="30" src="https://img.icons8.com/ios-filled/100/multiply.png" alt="multiply" onClick={() => filterDispatch({ type: "filterFalse" })}/>
        </div>
        <div>
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
        <div>
          <h3>Set Range</h3>
          0
          <input
            type="range"
            min="0"
            max="5000"
            value={filterState.rangeValue}
            step="100"
            onChange={(event) =>
              filterDispatch({
                type: "range-filter",
                rangeFilterVal: event.target.value,
              })
            }
          />
          5000
        </div>
        <div>
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
        <div>
          <label><input type="checkbox" checked={filterState.category.find(item=>item === "shoes")} onClick={()=>filterDispatch({type: "FILTER_BY_CATEGORY", payload: "shoes"})}/>
          shoes
          </label>
          <label><input type="checkbox" checked={filterState.category.find(item=>item === "football")} onClick={()=>filterDispatch({type: "FILTER_BY_CATEGORY", payload: "football"})}/>
          football
          </label>
          <label><input type="checkbox" checked={filterState.category.find(item=>item === "tshirt")} onClick={()=>filterDispatch({type: "FILTER_BY_CATEGORY", payload: "tshirt"})}/>
          tshirts
          </label>
          <label><input type="checkbox" checked={filterState.category.find(item=>item === "lower")} onClick={()=>filterDispatch({type: "FILTER_BY_CATEGORY", payload: "lower"})}/>
          lower
          </label>
        </div>
        {filterState.clearFilter && (
          <button
            className={
              !filterState.clearFilter ? "dis-hidden" : "btn-hideFilter"
            }
            onClick={() => filterDispatch({ type: "clear-filter" })}
          >
            clear Filters
          </button>
        )}
      </div>
    </>
  );
}

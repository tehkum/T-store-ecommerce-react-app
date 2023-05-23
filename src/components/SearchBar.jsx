import { useContext } from "react";
import "./Header.css";
import { useFilter } from "../context/filterProvider";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const { filterDispatch } = useContext(useFilter);
  const navigate = useNavigate();

  const eventHandler = (event) => {
    navigate("/products/all");
    filterDispatch({type: "search", searchVal: event.target.value});  
  }

  return (
    <>
      <label htmlFor="search-top">
        <input
          class="search-bar"
          type="text"
          id="search-top"
          placeholder="Search Here"
          onChange={eventHandler}
        />
      </label>
    </>
  );
}

import { useContext, useEffect, useState } from "react";
import "../AuthPages.css";
import { useAddress, useCart } from "../../index";
import { useNavigate } from "react-router-dom";

export default function Address() {
  const { addressState, addressDispatch } = useContext(useAddress);
  const { cartDispatch } = useContext(useCart);
  const [selectAddress, setSelect] = useState({
    clicked: false,
    id: "",
  });

  const navigate = useNavigate();

  const orderHandler = () =>{
    cartDispatch({type: "clearCart"})
    navigate("/order-review")
  }

  useEffect(()=>{
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: "smooth",
    });
  },[])

  return (
    <>
      <div className="login-container">
        <div className="part1-login">
          <h1>ADD NEW ADDRESS</h1>

          <label htmlFor="address-lane-1">
            <input
              type="text"
              id="address-lane-1"
              placeholder="Address Lane 1*"
              className="field-inp"
              onChange={(event) =>
                addressDispatch({
                  type: "addAddressDetails",
                  data: event.target.value,
                  addressType: "addOne",
                })
              }
            />
          </label>
          <label htmlFor="address-lane-2">
            <input
              type="text"
              id="address-lane-2"
              placeholder="Address Lane 2*"
              className="field-inp"
              onChange={(event) =>
                addressDispatch({
                  type: "addAddressDetails",
                  data: event.target.value,
                  addressType: "addTwo",
                })
              }
            />
          </label>
          <label htmlFor="landmark">
            <input
              type="text"
              id="landmark"
              placeholder="Landmark"
              className="field-inp"
              onChange={(event) =>
                addressDispatch({
                  type: "addAddressDetails",
                  data: event.target.value,
                  addressType: "landmark",
                })
              }
            />
          </label>
          <label htmlFor="city">
            <input
              type="text"
              id="city"
              placeholder="City*"
              className="field-inp"
              onChange={(event) =>
                addressDispatch({
                  type: "addAddressDetails",
                  data: event.target.value,
                  addressType: "city",
                })
              }
            />
          </label>
          <label htmlFor="postal-code">
            <input
              type="number"
              id="postal-code"
              placeholder="Postal Code*"
              className="field-inp"
              onChange={(event) =>
                addressDispatch({
                  type: "addAddressDetails",
                  data: event.target.value,
                  addressType: "postal",
                })
              }
            />
          </label>
          <label htmlFor="country">
            <input
              type="text"
              id="country"
              placeholder="Country*"
              className="field-inp"
              onChange={(event) =>
                addressDispatch({
                  type: "addAddressDetails",
                  data: event.target.value,
                  addressType: "country",
                })
              }
            />
          </label>
          {/* <button className="button-login btn-secondary" >ADD</button> */}
          <button
            className="button-login btn-primary"
            onClick={() => addressDispatch({ type: "addAddressClick" })}
          >
            ADD
          </button>
          <p>
            By clicking "LOG IN", I agree to the Terms & Conditions, the adiClub
            Terms & Conditions and the adidas Privacy Policy.
          </p>
        </div>
        <div className="part2-login">
          <h2>ADDRESS LIST</h2>
          <p>SELECT ONE OF THE ADDRESS FOR DELIVERY.</p>

          {addressState?.addressData?.map(
            ({ addOne, addTwo, landmark, city, country }, index) => (
              <div
                style={{
                  border:
                    selectAddress.id === index
                      ? "2px solid green"
                      : "2px solid #666666",
                  padding: "1rem",
                  margin: "1rem 0",
                }}
              >
                <p>
                  <b>Address-Lane-1:</b> {addOne}
                </p>
                <p>
                  <b>Address-Lane-2:</b> {addTwo}
                </p>
                <p>
                  <b>Landmark:</b> {landmark}
                </p>
                <p>
                  <b>City:</b> {city}
                </p>
                <p>
                  <b>Coutry:</b> {country}
                </p>
                <button
                  className="button-login btn-secondary"
                  onClick={() => setSelect({ clicked: true, id: index })}
                >
                  Confirm Address
                </button>
                {selectAddress.clicked && selectAddress.id === index && (
                  <button
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      boxShadow: "2px 2px 2px rgb(0,0,0)",
                      padding: "0.5rem 1rem",
                      marginLeft: "1rem",
                    }}
                    className="btn btn-order"
                    onClick={orderHandler}
                  >
                    Order
                  </button>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

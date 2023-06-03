import { useContext, useEffect, useState } from "react";
import "../AuthPages.css";
import { useAddress, useCart } from "../../index";
import { useNavigate } from "react-router-dom";
import AlertBox from "../../components/AlertBox";
import "./Address.css";

export default function Address() {
  const { addressState, addressDispatch } = useContext(useAddress);
  const { cartDispatch } = useContext(useCart);
  const [fieldEmpty, setField] = useState({
    clicked: false,
    message: "",
  });
  const [selectAddress, setSelect] = useState({
    clicked: false,
    id: "",
  });
  const [showEdit, setEdit] = useState({
    clicked: false,
    index: -1,
    typeIndex: -1,
    editValue: "",
  });

  const navigate = useNavigate();

  const orderHandler = () => {
    cartDispatch({ type: "clearCart" });
    navigate("/order-review");
  };

  const clickHandler = () => {
    if (
      !addressState?.currAddress?.addOne ||
      !addressState?.currAddress?.addTwo ||
      !addressState?.currAddress?.landmark ||
      !addressState?.currAddress?.postal ||
      !addressState?.currAddress?.city ||
      !addressState?.currAddress?.country
    ) {
      setField({clicked: !fieldEmpty.clicked, message: "Please fill the column"});
    } else {
    addressDispatch({ type: "addAddressClick" });
    }
  };


  const addressHandler = (event, addressType) => {
    addressDispatch({
      type: "addAddressDetails",
      data: event.target.value,
      addressType: addressType,
    });
  };

  const editHandler = (index, type) => {
    addressDispatch({ type: "editAddress", index: index, addType: type, editValue: showEdit.editValue });
    setEdit({...showEdit, clicked: false})
  };

  useEffect(() => {
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: "smooth",
    });
  }, []);

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
              className="field-inp address-inp"
              onChange={(event) => addressHandler(event, "addOne")}
            />
          </label>
          <label htmlFor="address-lane-2">
            <input
              type="text"
              id="address-lane-2"
              placeholder="Address Lane 2*"
              className="field-inp address-inp"
              onChange={(event) => addressHandler(event, "addTwo")}
            />
          </label>
          <label htmlFor="landmark">
            <input
              type="text"
              id="landmark"
              placeholder="Landmark"
              className="field-inp address-inp"
              onChange={(event) => addressHandler(event, "landmark")}
            />
          </label>
          <label htmlFor="city">
            <input
              type="text"
              id="city"
              placeholder="City*"
              className="field-inp address-inp"
              onChange={(event) => addressHandler(event, "city")}
            />
          </label>
          <label htmlFor="postal-code">
            <input
              type="number"
              id="postal-code"
              placeholder="Postal Code*"
              className="field-inp address-inp"
              onChange={(event) => addressHandler(event, "postal")}
            />
          </label>
          <label htmlFor="country">
            <input
              type="text"
              id="country"
              placeholder="Country*"
              className="field-inp address-inp"
              onChange={(event) => addressHandler(event, "country")}
            />
          </label>
          {/* <button className="button-login btn-secondary" >ADD</button> */}
          <button className="button-login btn-primary" onClick={clickHandler}>
            ADD
          </button>
          <p>
            By clicking "Add Address", I agree to the Terms & Conditions, the
            adiClub Terms & Conditions and the adidas Privacy Policy.
          </p>
        </div>
        <div className="part2-login">
          <h2>ADDRESS LIST</h2>
          <p>SELECT ONE OF THE ADDRESS FOR DELIVERY.</p>

          {addressState?.addressData?.map(
            ({ addOne, addTwo, landmark, city, country, postal }, index) => (
              <div
                className="address-detail-box"
                style={{
                  border:
                    selectAddress.id === index
                      ? "2px solid green"
                      : "2px solid #666666",
                  padding: "1rem",
                  margin: "1rem 0",
                }}
              >
                {[
                  { name: "Address-Lane-1", value: addOne, valueName: "addOne" },
                  { name: "Address-Lane-2", value: addTwo, valueName: "addTwo" },
                  { name: "Landmark", value: landmark, valueName: "landmark" },
                  { name: "Postal", value: postal, valueName: "postal" },
                  { name: "City", value: city, valueName: "city" },
                  { name: "Country", value: country, valueName: "country" },
                ]?.map(({ name, value, valueName }, typeIndex) => (
                  <p className="addressDetails">
                    <b>{name}:</b>{" "}
                    {showEdit.index === index &&
                    showEdit.clicked &&
                    showEdit.typeIndex === typeIndex ? (
                      <><input
                        type="text"
                        defaultValue={value}
                        onChange={(e) =>
                          setEdit({ ...showEdit, editValue: e.target.value })
                        }
                        className="inp-edit"
                      ></input>
                      <button
                      onClick={() => {
                        editHandler(index, valueName)
                      }}
                    >
                      Change
                    </button>
                      </>
                    ) : (
                      <>
                        <span>{value}</span>{" "}
                        <button
                          onClick={() => {
                            setEdit({
                              clicked: true,
                              index: index,
                              typeIndex: typeIndex,
                            });
                          }}
                        >
                          edit
                        </button>
                      </>
                    )}{" "}
                  </p>
                ))}
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
      <AlertBox
        alertMessage={fieldEmpty.message}
        clicked={fieldEmpty.clicked}
      />
    </>
  );
}

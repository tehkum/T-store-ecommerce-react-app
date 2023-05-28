import { useContext } from "react";
import CardPattern1 from "../components/CardPattern1";
import "./Homepage.css";
import front1 from "../images/frontpage-box2.jpg";
import ProductCard from "../components/ProductCard";
import BigCard from "../components/BigCard";
import { useProducts } from "../context/ProductProvider";
import football from "../images/football.jpg";
import tshirt from "../images/tshirt.jpg";
import shoes from "../images/shoes.jpg";
import tshirt1 from "../images/tshirt1.png";
import jeans from "../images/jeans.png";
import { useNavigate } from "react-router-dom";
import LoadingCard from "../components/LoadingCard";

export function HomePage() {
  const { productData, loading } = useContext(useProducts);
  const navigate = useNavigate();

  return (
    <>
      <div className="top-box-home">
        <h1>20% off on everything for order above ₹3999.</h1>
        <p>
          <b>BUY MORE PAY LESS.</b>
        </p>
        <div>
          <CardPattern1
            text={"shoes"}
            image={
              "https://res.cloudinary.com/dbehxf29s/image/upload/v1684593638/shoeprof1_ot6zqo.webp"
            }
          />
          <CardPattern1 text={"tshirts"} image={tshirt1} />
          <CardPattern1 text={"lowers"} image={jeans} />
        </div>
      </div>
      {/* *************************************** */}
      <div className="box-no2-home">
        <div className="container-box2-home">
          <div className="card-home2">
            <h1>CLUB ORIGINALS</h1>
            <p>
              Free-thinkers, culture-makers and originators - welcome to Club
              Originals.
            </p>
            <button onClick={() => navigate("/products/all")}>SHOP NOW </button>
          </div>
        </div>
        <img src={front1} alt="front page" className="card-no2-img" />
      </div>
      {/* ********************************************* */}
      <div className="box-no3-home">
        <h1>Still interested?</h1>
        <div className="slider1-products-home">
          {loading ? (
            <>
              <LoadingCard />
              <LoadingCard />
              <LoadingCard />
              <LoadingCard />
              <LoadingCard />
              <LoadingCard />
              <LoadingCard />
            </>
          ) : (
            productData
              .filter(({ category }) => category === "shoes")
              .map((item) => {
                const { _id, title, image, type, price } = item;
                return (
                  <ProductCard
                    id={_id}
                    image={image}
                    title={title}
                    price={price}
                    category={type}
                  />
                );
              })
          )}
        </div>
      </div>
      {/* ************************************************** */}
      <div className="box-no4-home">
        <h1>WHAT ARE YOU SHOPPING?</h1>
        <div className="slider2-products-home">
          <BigCard image={shoes} title={"SHOES"} cat={"shoes"} />
          <BigCard image={tshirt} title={"T-SHIRT"} cat={"t-shirts"} />
          <BigCard image={football} title={"FOOTBALL"} cat={"football"} />
        </div>
      </div>
      {/* *************************************************** */}
      <div className="box-no5-home">
        <div className="topic1-box5-home">
          <h1>About Tehkum Store</h1>
          <p>
            Tehkum Store is a multinational corporation that designs and
            manufactures shoes, clothing and accessories. It is the largest
            sportswear manufacturer in Europe and the second largest in the
            world after Nike. Tehkum Store offers a home to the runner, the
            basketball player, the soccer kid, and the fitness enthusiast. The
            weekend hiker that loves to escape the city and the yoga teacher
            that spreads the moves.
          </p>
          <p>
            Tehkum Store designs for and with athletes of all kinds. Creators
            who love to change the game. Challenge conventions. Break the rules
            and define new ones. Then break them again. They supply teams and
            individuals with athletic clothing pre-match to stay focused.
          </p>
        </div>
        <div className="topic2-box5-home">
          <h1>Why Tehkum Store?</h1>
          <p>
            There are many reasons why you might want to buy from Tehkum Store.
            One reason is that they offer a wide range of products for athletes
            of all kinds. Whether you’re a runner, basketball player, soccer
            kid, or fitness enthusiast, Tehkum Store has something for you. They
            also have a range of products for the weekend hiker and the yoga
            teacher .
          </p>
          <p>
            Another reason to buy from Tehkum Store is their commitment to
            sustainability. They partner with the best in the industry to
            co-create sports apparel and style that match their customers’
            athletic needs while keeping sustainability in mind . This means
            that when you buy from Tehkum Store, you can feel good about your
            purchase knowing that it was made with the environment in mind.
          </p>
        </div>
      </div>
    </>
  );
}

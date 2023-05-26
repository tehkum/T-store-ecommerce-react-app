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
          <CardPattern1 text={"shoes"} image={"https://res.cloudinary.com/dbehxf29s/image/upload/v1684593638/shoeprof1_ot6zqo.webp"} />
          <CardPattern1 text={"tshirts"} image={tshirt1}/>
          <CardPattern1 text={"lowers"} image={jeans}/>
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
            <button onClick={()=>navigate("/products/all")}>SHOP NOW </button>
          </div>
        </div>
        <img src={front1} alt="front page" className="card-no2-img" />
      </div>
      {/* ********************************************* */}
      <div className="box-no3-home">
        <h1>Still interested?</h1>
        <div className="slider1-products-home">
          {loading ? <><LoadingCard /><LoadingCard /><LoadingCard /><LoadingCard /><LoadingCard /><LoadingCard /><LoadingCard /></> : productData.filter(({category})=> category==="shoes" ).map((item)=>{
            const {_id, title, image, type, price} = item;
            return <ProductCard id={_id} image={image} title={title} price={price} category={type}/>
          } ) }
        </div>
      </div>
      {/* ************************************************** */}
      <div className="box-no4-home">
        <h1>WHAT ARE YOU SHOPPING?</h1>
        <div className="slider2-products-home">
          <BigCard image={shoes} title={"SHOES"} cat={"shoes"}/>
          <BigCard image={tshirt} title={"T-SHIRT"} cat={"t-shirts"} />
          <BigCard image={football} title={"FOOTBALL"} cat={"football"} />
        </div>
      </div>
      {/* *************************************************** */}
      <div className="box-no5-home">
        <div className="topic1-box5-home">
          <h1>Heading of the topic1</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium
            aenean pharetra magna ac placerat. In aliquam sem fringilla ut morbi
            tincidunt augue interdum. Ornare quam viverra orci sagittis eu
            volutpat odio. Tristique risus nec feugiat in fermentum posuere.
            Pretium quam vulputate dignissim suspendisse. Sit amet tellus cras
            adipiscing enim eu turpis. Tincidunt arcu non sodales neque sodales
            ut etiam. Eu ultrices vitae auctor eu augue ut lectus. Faucibus nisl
            tincidunt eget nullam non. Rhoncus aenean vel elit scelerisque
            mauris pellentesque. Sit amet consectetur adipiscing elit ut
            aliquam. At erat pellentesque adipiscing commodo elit at imperdiet
            dui. Sed turpis tincidunt id aliquet risus feugiat in. At in tellus
            integer feugiat scelerisque varius morbi enim. Phasellus vestibulum
            lorem sed risus ultricies tristique nulla. Risus pretium quam
            vulputate dignissim suspendisse in est. Pellentesque elit
            ullamcorper dignissim cras tincidunt. Aliquam eleifend mi in nulla
            posuere sollicitudin. Dictum sit amet justo donec. Vestibulum mattis
            ullamcorper velit sed ullamcorper morbi tincidunt ornare massa.
            Tincidunt arcu non sodales neque sodales ut etiam sit. Sed felis
            eget velit aliquet sagittis id consectetur. Risus nullam eget felis
            eget. Odio euismod lacinia at quis risus sed vulputate. Vulputate ut
            pharetra sit amet aliquam. Morbi tristique senectus et netus et
            malesuada. Tempor id eu nisl nunc mi. Sit amet tellus cras
            adipiscing enim eu. Dolor sed viverra ipsum nunc. Molestie nunc non
            blandit massa enim. Auctor neque vitae tempus quam. Nisi est sit
            amet facilisis magna. Tempus imperdiet nulla malesuada pellentesque
            elit eget gravida cum sociis. Vestibulum lorem sed risus ultricies
            tristique nulla aliquet enim tortor. Tempor orci dapibus ultrices in
            iaculis nunc sed augue lacus. Egestas diam in arcu cursus euismod
            quis viverra.
          </p>
        </div>
        <div className="topic2-box5-home">
          <h1>Heading of the topic1</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium
            aenean pharetra magna ac placerat. In aliquam sem fringilla ut morbi
            tincidunt augue interdum. Ornare quam viverra orci sagittis eu
            volutpat odio. Tristique risus nec feugiat in fermentum posuere.
            Pretium quam vulputate dignissim suspendisse. Sit amet tellus cras
            adipiscing enim eu turpis. Tincidunt arcu non sodales neque sodales
            ut etiam. Eu ultrices vitae auctor eu augue ut lectus. Faucibus nisl
            tincidunt eget nullam non. Rhoncus aenean vel elit scelerisque
            mauris pellentesque. Sit amet consectetur adipiscing elit ut
            aliquam. At erat pellentesque adipiscing commodo elit at imperdiet
            dui. Sed turpis tincidunt id aliquet risus feugiat in. At in tellus
            integer feugiat scelerisque varius morbi enim. Phasellus vestibulum
            lorem sed risus ultricies tristique nulla. Risus pretium quam
            vulputate dignissim suspendisse in est. Pellentesque elit
            ullamcorper dignissim cras tincidunt. Aliquam eleifend mi in nulla
            posuere sollicitudin. Dictum sit amet justo donec. Vestibulum mattis
            ullamcorper velit sed ullamcorper morbi tincidunt ornare massa.
            Tincidunt arcu non sodales neque sodales ut etiam sit. Sed felis
            eget velit aliquet sagittis id consectetur. Risus nullam eget felis
            eget. Odio euismod lacinia at quis risus sed vulputate. Vulputate ut
            pharetra sit amet aliquam. Morbi tristique senectus et netus et
            malesuada. Tempor id eu nisl nunc mi. Sit amet tellus cras
            adipiscing enim eu. Dolor sed viverra ipsum nunc. Molestie nunc non
            blandit massa enim. Auctor neque vitae tempus quam. Nisi est sit
            amet facilisis magna. Tempus imperdiet nulla malesuada pellentesque
            elit eget gravida cum sociis. Vestibulum lorem sed risus ultricies
            tristique nulla aliquet enim tortor. Tempor orci dapibus ultrices in
            iaculis nunc sed augue lacus. Egestas diam in arcu cursus euismod
            quis viverra.
          </p>
        </div>
      </div>
    </>
  );
}

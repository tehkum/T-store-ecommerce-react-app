import { Link } from "react-router-dom";
import "./Card1.css";

export default function CardPattern1({ text, image, link }) {
  return (
    <div className="card1">
      <img src={image} alt={text} width="100" height="100" />
      <Link className="card1-link" to={`/products/${link}`}>
        {text}
      </Link>
    </div>
  );
}

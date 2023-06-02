import { Link } from "react-router-dom";
import "./Bigcard.css";

export default function BigCard({ image, title, cat }) {
  return (
    <div className="big-card-container">
      <Link to={`/products/${cat}`}>
        <img src={image} alt={title} />
      </Link>
      <p>
        <b>{title}</b>
      </p>
    </div>
  );
}

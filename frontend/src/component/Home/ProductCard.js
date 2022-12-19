import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating-stars-component";

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    edit: false,
    precision: 0.5,
  };
  return (
    <Link
      id={product._id}
      className="productCard"
      to={`/product/${product._id}`}
    >
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <Rating {...options} />
        <span className="productCardSpan">
          {" "}
          ({product.numOfReviews} Reviews)
        </span>
      </div>
      <span>{`$${product.price}`}</span>
    </Link>
  );
};

export default ProductCard;

import React from "react";
import { Link } from "react-router-dom";
import FormatePrice from "../Helper/FormatePrice";
import CountStartRating from "../Helper/CountStartRating";

const GridViewProduct = ({ elem }) => {
  const { id, title, thumbnail, rating, brand, price } = elem;

  return (
    <div className="card">
      <Link className="produst_link" to={`/product/${id}`}>
        <figure className="grid_img">
          <img src={thumbnail} alt={title} />
          {brand &&
            <figcaption className="caption">{brand}</figcaption>
          }
        </figure>
      </Link>

      <div className="card-data">
        <div className="card-data-flex">
          <h3 className="sub_heading">{title}</h3>
          <p className="card-data--price">
            <FormatePrice price={price} />
          </p>
        </div>
        <div className="rating">
          {/* {totalStarts.map((elem) => { */}
          {/* return */}

          <CountStartRating rating={rating} />
        </div>
        <Link to={`/product/${id}`}>
          <button style={{ width: "100%" }} className="btn">
            More Info
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GridViewProduct;

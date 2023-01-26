import React from "react";
import "../styles/product.css";

export default function Product({ detail }) {
  return (
    <div className="productOfAdmin">
      <div id="box">
        <div>
          <img src={detail.image} />
        </div>
        <div>
          <p>{detail.name}</p>
        </div>
        <div>
          <p>${detail.price}</p>
        </div>
        <div>
          <p>{detail.stock}</p>
        </div>
        <div>
          <p>{detail.sale}%</p>
        </div>
        <div>
          <p>{detail.category}</p>
        </div>
      </div>
      <div id="line"></div>
    </div>
  );
}

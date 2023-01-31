import React from "react";
import Img7 from "../images/Img7";
import "../styles/product.css";
import Dropdown from "react-bootstrap/Dropdown";

export default function Product({ detail }) {
  // function deleteProductHandler(id) {
  //   axios.delete(`http://localhost:2020/product/${id}`);
  // }
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
        <div>
          <Dropdown>
            <Dropdown.Toggle id="toggle">
              <Img7 />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Өөрчлөх</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Устгах</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Вебсайтаас нуух</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div id="line"></div>
    </div>
  );
}

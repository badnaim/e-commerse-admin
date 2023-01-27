import React from "react";
import Product from "../components/Product";
import Img3 from "../images/Img3";
import Img5 from "../images/Img5";
import Img6 from "../images/Img6";
import Img7 from "../images/Img7";
import Dropdown from "react-bootstrap/Dropdown";
// import { useNavigate } from "react-router-dom";
import "../styles/products.css";
// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Offcanvas from "react-bootstrap/Offcanvas";

export default function Main(prop) {
  // const [information, setInformation] = useState(data);
  const { myData } = prop;
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true); // offcanvas //
  console.log(myData);
  return (
    <div
      // onClick={() => {
      //   navigate(`../product/${data.id}`);
      // }}
      className="grayBck"
    >
      <div className="headingSec">
        <div>Бүтээгдэхүүнүүд</div>
        <div id="line"></div>
        <div className="headingTwoSide">
          <div>
            <button id="bOne">
              <Img3 />
              Бараа нэмэх
            </button>

            <Dropdown>
              <Dropdown.Toggle id="toggle">
                <button id="bTwo">
                  <span>
                    <Img5 />
                    All
                  </span>
                  <Img6 />
                </button>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/all">All</Dropdown.Item>
                <Dropdown.Item href="#/action-2">appliances</Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  computers & tablets
                </Dropdown.Item>
                <Dropdown.Item href="#/action-4">pad</Dropdown.Item>
                <Dropdown.Item href="#/action-5">laptop</Dropdown.Item>
                <Dropdown.Item href="#/action-6">Apple</Dropdown.Item>
                <Dropdown.Item href="#/action-7">headphones</Dropdown.Item>
                <Dropdown.Item href="#/action-8">gaming console</Dropdown.Item>
                <Dropdown.Item href="#/action-9">telescope</Dropdown.Item>
                <Dropdown.Item href="#/action-10">tablets</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div id="inp">
            <input placeholder="Хайх" />
          </div>
        </div>
      </div>
      <div className="whiteSec">
        <div>
          <div id="categ">
            <div>Зураг</div>
            <div>Барааны нэр</div>
            <div>Үнэ</div>
            <div>Үлдэгдэл</div>
            <div>Хямдрал%</div>
            <div>Категори</div>
            <div>
              <Img7 />
            </div>
          </div>
        </div>
        {myData.map((prod, index) => (
          <Product detail={prod} key={index} />
        ))}
      </div>
    </div>
  );
}

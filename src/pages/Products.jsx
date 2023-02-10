import React from "react";
import Product from "../components/Product";
import Img3 from "../images/Img3";
import Img5 from "../images/Img5";
import Img6 from "../images/Img6";
import Dropdown from "react-bootstrap/Dropdown";
import AddProd from "../components/AddProd";
// import { useNavigate } from "react-router-dom";
import "../styles/products.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function Main({ setRefresh, myData }) {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState('');
  // console.log(search)


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // console.log(myData);
  return (
    <div
      className="grayBck"
    >
      <div className="headingSec">
        <div>Бүтээгдэхүүнүүд</div>
        <div id="line"></div>
        <div className="headingTwoSide">
          <div>

            <Button id="bOne" onClick={handleShow} className="me-2">
              <Img3 />
              Бараа нэмэх
            </Button>
            <Offcanvas
              id="canvas"
              placement="end"
              show={show}
              onHide={handleClose}
            >
              <Offcanvas.Header closeButton>
              </Offcanvas.Header>
              <div id="lineCanvas"></div>
              <Offcanvas.Body>
                <div className="containerCanvas">
                  <div className="boxCanvas">
                    <AddProd />
                  </div>
                </div>
              </Offcanvas.Body>
            </Offcanvas>

            <Dropdown>
              <Dropdown.Toggle id="toggle">
                <div id="bTwo">
                  <span>
                    <Img5 />
                    Category
                  </span>
                  <Img6 />
                </div>
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
            <input placeholder="Хайх" onChange={(e) => setSearch(e.target.value)} />
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
            <div id="cat1">Категори</div>
          </div>
        </div>
        {myData.filter((item) => {
          return search.toLowerCase() === ''
            ? item
            : item.name.toLowerCase().includes(search)
        }).map((prod, index) => (
          <Product setRefresh={setRefresh} detail={prod} key={index} />
        ))}
      </div>
    </div>
  );
}

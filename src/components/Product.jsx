import React from "react";
import Img7 from "../images/Img7";
import "../styles/product.css";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Offcanvas from "react-bootstrap/Offcanvas";
import EditSec from "../components/subcomps/EditSec";
import axios from "axios";

export default function Product({ detail, refresh, setRefresh }) {
  // const [refresh, setRefresh] = useState(false);

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  function deleteProductHandler(id) {
    axios.delete(`http://localhost:2020/products/delete/${id}`);
    setRefresh(!refresh)
  }
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
              <Dropdown.Item onClick={handleShow1}>Өөрчлөх</Dropdown.Item>
              <Offcanvas
                id="canvas"
                placement="end"
                show={show1}
                onHide={handleClose1}
              >
                <Offcanvas.Header closeButton></Offcanvas.Header>
                <div id="lineCanvas"></div>
                <Offcanvas.Body>
                  <div className="containerCanvas">
                    <div className="boxCanvas">
                      <EditSec detail={detail} />
                    </div>
                  </div>
                </Offcanvas.Body>
              </Offcanvas>

              <Dropdown.Item onClick={handleShow}>Устгах</Dropdown.Item>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  {/* <Modal.Title>Modal heading</Modal.Title> */}
                </Modal.Header>
                <Modal.Body>Устгахдаа итгэлтэй байна уу бяач?</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Cancel
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => {
                      deleteProductHandler(detail.id);
                      console.log("ustgalaa", detail.id);
                    }}
                  >
                    Delete
                  </Button>
                </Modal.Footer>
              </Modal>

              <Dropdown.Item href="#/action-3">Вебсайтаас нуух</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div id="line"></div>
    </div>
  );
}

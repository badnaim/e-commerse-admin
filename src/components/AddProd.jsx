import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/addProd.css";

export default function AddProd() {
  const url = "http://localhost:2020/products";
  const [data, setData] = useState({
    description: "",
    name: "",
    id: "",
    image: "",
    price: "",
    stock: "",
    sale: "",
    category: "",
  });

  // useEffect(() => {
  //   axios.get(url).then(res => {
  //     console.log("getting from ::::", res.data)
  //     setData(res.data)
  //   }).catch(err => console.log(err))
  // }, )

  function submit(e) {
    e.preventDefault();
    axios
      .post(url, {
        image: data.image,
        name: data.name,
        category: data.category,
        id: data.id,
        price: data.price,
        stock: data.stock,
        sale: data.sale,
        description: data.description,
      })
      .then((res) => {
        console.log(res.data);
      });
  }

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  return (
    <div>
      <div id="titleOfCanvas">
        <h4>Барааны зураг</h4>
      </div>
      <form className="formOfAdd" onSubmit={(e) => submit(e)}>
        {/* <input onChange={} placeholder='image' type="file" name='file'></input> */}
        <Form.Label>Image link</Form.Label>
        <Form.Control
          onChange={(e) => handle(e)}
          name="image"
          id="image"
          value={data.image}
          placeholder="image"
          type="text"
        ></Form.Control>
        <Form.Label>Name</Form.Label>
        <Form.Control
          onChange={(e) => handle(e)}
          id="name"
          value={data.name}
          placeholder="name"
          type="text"
        ></Form.Control>
        <Form.Label>Category</Form.Label>
        <Form.Select
          onChange={(e) => handle(e)}
          name="category"
          id="category"
          value={data.category}
          placeholder="category"
        >
          <option>appliances</option>
          <option>computers & tablets</option>
          <option>pad</option>
          <option>laptop</option>
          <option>Apple</option>
          <option>headphones</option>
          <option>gaming console</option>
          <option>Apple</option>
          <option>telescope</option>
          <option>tablets</option>
        </Form.Select>

        <Form.Label>ID</Form.Label>
        <Form.Control
          onChange={(e) => handle(e)}
          name="id"
          id="id"
          value={data.id}
          placeholder="id"
          type="text"
        ></Form.Control>
        <Form.Label>Price</Form.Label>
        <Form.Control
          onChange={(e) => handle(e)}
          name="price"
          id="price"
          value={data.price}
          placeholder="price"
          type="number"
        ></Form.Control>
        <Form.Label>Stock</Form.Label>
        <Form.Control
          onChange={(e) => handle(e)}
          name="stock"
          id="stock"
          value={data.stock}
          placeholder="stock"
          type="number"
        ></Form.Control>
        <Form.Label>Sale</Form.Label>
        <Form.Control
          onChange={(e) => handle(e)}
          name="sale"
          id="sale"
          value={data.sale}
          placeholder="sale"
          type="number"
        ></Form.Control>
        <Form.Label>Description</Form.Label>
        <Form.Control
          onChange={(e) => handle(e)}
          name="description"
          id="description"
          value={data.description}
          placeholder="description"
          type="text"
        ></Form.Control>
        <div className="buttonOfAddComp">
          <Button variant="success" type="submit">
            Submit
          </Button>
          <input type="button" value="Cancel" />
        </div>
      </form>
    </div>
  );
}

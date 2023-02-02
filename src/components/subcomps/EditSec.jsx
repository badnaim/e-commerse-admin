import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function EditSec({ detail }) {
  return (
    <div>
      <div id="titleOfCanvas">
        <h4>Барааны зураг</h4>
      </div>
      {/* <input onChange={} placeholder='image' type="file" name='file'></input> */}
      <Form.Label>Image link</Form.Label>
      <Form.Control
        defaultValue={detail.image}
        name="image"
        id="image"
        placeholder="image"
        type="text"
      ></Form.Control>
      <Form.Label>Name</Form.Label>
      <Form.Control
        defaultValue={detail.name}
        id="name"
        placeholder="name"
        type="text"
      ></Form.Control>
      <Form.Label>Category</Form.Label>
      <Form.Select
        defaultValue={detail.category}
        name="category"
        id="category"
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
        defaultValue={detail.id}
        name="id"
        id="id"
        placeholder="id"
        type="text"
        disabled
      ></Form.Control>
      <Form.Label>Price</Form.Label>
      <Form.Control
        defaultValue={detail.price}
        name="price"
        id="price"
        placeholder="price"
        type="number"
      ></Form.Control>
      <Form.Label>Stock</Form.Label>
      <Form.Control
        defaultValue={detail.stock}
        name="stock"
        id="stock"
        placeholder="stock"
        type="number"
      ></Form.Control>
      <Form.Label>Sale</Form.Label>
      <Form.Control
        defaultValue={detail.sale}
        name="sale"
        id="sale"
        placeholder="sale"
        type="number"
      ></Form.Control>
      <Form.Label>Description</Form.Label>
      <Form.Control
        defaultValue={detail.description}
        name="description"
        id="description"
        placeholder="description"
        type="text"
      ></Form.Control>
      <div className="buttonOfAddComp">
        <Button type="submit">Change</Button>

        {/* <input type="button" value="Refresh" /> */}
        {/* {singleProd && <p>{singleProd.name}</p>} */}
      </div>
    </div>
  );
}

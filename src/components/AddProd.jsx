import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function AddProd() {
  const url = "http://localhost:2020/products"
  const [data, setData] = useState({
    name: "",
    category: "",
    id: "",
    price: "",
    stock: "",
    sale: "",
    description: ""
  })

  // useEffect(() => {
  //   axios.get(url).then(res => {
  //     console.log("getting from ::::", res.data)
  //     setData(res.data)
  //   }).catch(err => console.log(err))
  // }, )

  function submit(e) {
    e.preventDefault();
    axios.post(url, {
      name: data.name,
      category: data.category,
      id: data.id,
      price: data.price,
      stock: data.stock,
      sale: data.sale,
      description: data.description
    })
    .then(res => {
      console.log(res.data)
    })
  }

  function handle(e) {
    const newData = {...data}
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData)
  }

  return (
    <div>
      <div id="titleOfCanvas"><h4>Барааны зураг</h4></div>
      <form onSubmit={(e) => submit(e)}>
        {/* <input onChange={} placeholder='image' type="file" name='file'></input> */}
        <input onChange={(e) => handle(e)} id="name" value={data.name} placeholder='name' type="text"></input>
        <input onChange={(e) => handle(e)} id="category" value={data.category} placeholder='category' type="text"></input>
        <input onChange={(e) => handle(e)} id="id" value={data.id} placeholder='id' type="text"></input>
        <input onChange={(e) => handle(e)} id="price" value={data.price} placeholder='price' type="number"></input>
        <input onChange={(e) => handle(e)} id="stock" value={data.stock} placeholder='stock' type="number"></input>
        <input onChange={(e) => handle(e)} id="sale" value={data.sale} placeholder='sale' type="number"></input>
        <input onChange={(e) => handle(e)} id="description" value={data.description} placeholder='description' type="text"></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

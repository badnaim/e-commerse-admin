import React from "react";
import Product from "../components/Product";
// import { useNavigate } from "react-router-dom";
import "../styles/products.css";

export default function Main(prop) {
  // const [information, setInformation] = useState(data);
  const { myData } = prop;
  console.log(myData);
  return (
    <div
      // onClick={() => {
      //   navigate(`../product/${data.id}`);
      // }}
      className="grayBck"
    >
      <div className="whiteSec">
        <div>
          <div></div>
          <div id="categ">
            <div>Зураг</div>
            <div>Барааны нэр</div>
            <div>Үнэ</div>
            <div>Үлдэгдэл</div>
            <div>Хямдрал%</div>
            <div>Категори</div>
          </div>
        </div>
        {myData.map((prod, index) => (
          <Product detail={prod} key={index} />
        ))}
      </div>
    </div>
  );
}

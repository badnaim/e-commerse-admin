import React from "react";
import "../styles/SideMenu.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SideMenu() {
  const navigate = useNavigate();
  const [active, setActive] = useState("");
  // const handleClick = () => {
  //   setActive(!active);
  // };

  return (
    <div className="sideMenu">
      <div className="sideMenuIn">
        <button
          onClick={() => {
            navigate("/");
            setActive("Хянах");
          }}
          style={{
            backgroundColor: active === "Хянах" ? "#003585" : "#EFEFEF",
            color: active === "Хянах" ? "white" : "black",
          }}
        >
          Хянах самбар
        </button>
        <button
          onClick={() => {
            navigate("/products");
            setActive("Бүтээгдэхүүнүүд");
          }}
          style={{
            backgroundColor:
              active === "Бүтээгдэхүүнүүд" ? "#003585" : "#EFEFEF",
            color: active === "Бүтээгдэхүүнүүд" ? "white" : "black",
          }}
        >
          Бүтээгдэхүүнүүд
        </button>
        <button
          onClick={() => {
            navigate("/orders");
            setActive("Захиалгууд");
          }}
          style={{
            backgroundColor: active === "Захиалгууд" ? "#003585" : "#EFEFEF",
            color: active === "Захиалгууд" ? "white" : "black",
          }}
        >
          Захиалгууд
        </button>
        <button
          onClick={() => {
            navigate("/users");
            setActive("Хэрэглэгчид");
          }}
          style={{
            backgroundColor: active === "Хэрэглэгчид" ? "#003585" : "#EFEFEF",
            color: active === "Хэрэглэгчид" ? "white" : "black",
          }}
        >
          Хэрэглэгчид
        </button>
        <button
          onClick={() => {
            navigate("/moderator");
            setActive("Модератор");
          }}
          style={{
            backgroundColor: active === "Модератор" ? "#003585" : "#EFEFEF",
            color: active === "Модератор" ? "white" : "black",
          }}
        >
          Модератор
        </button>
        <button
          onClick={() => {
            navigate("/settings");
            setActive("Тохиргоо");
          }}
          style={{
            backgroundColor: active === "Тохиргоо" ? "#003585" : "#EFEFEF",
            color: active === "Тохиргоо" ? "white" : "black",
          }}
        >
          Тохиргоо
        </button>
      </div>
    </div>
  );
}

import React from "react";
import "../styles/SideMenu.css";
import { useNavigate } from "react-router-dom";

export default function SideMenu() {
  const navigate = useNavigate();
  return (
    <div className="sideMenu">
      <div className="sideMenuIn">
        <button onClick={() => navigate("/")}>Хянах самбар</button>
        <button onClick={() => navigate("/products")}>Бүтээгдэхүүнүүд</button>
        <button onClick={() => navigate("/orders")}>Захиалгууд</button>
        <button onClick={() => navigate("/users")}>Хэрэглэгчид</button>
        <button onClick={() => navigate("/moderator")}>Модератор</button>
        <button onClick={() => navigate("/settings")}>Тохиргоо</button>
      </div>
    </div>
  );
}

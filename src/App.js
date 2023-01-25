import "./styles/App.css";
// import { useState, useNavigate } from "react";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Orders from "./components/subcomps/Orders";
import Users from "./components/subcomps/Users";
import Moderator from "./components/subcomps/Moderator";
import Settings from "./components/subcomps/Settings";
import Main from "./pages/Main";
// import Login from "./pages/Login";
// import { users } from "./util/data";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainDisplay">
        <SideMenu />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/users" element={<Users />} />
          <Route path="/moderator" element={<Moderator />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

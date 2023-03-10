import "./styles/App.css";
import { useState } from "react";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Orders from "./components/subcomps/Orders";
import Users from "./components/subcomps/Users";
import Moderator from "./components/subcomps/Moderator";
import Settings from "./components/subcomps/Settings";
import Products from "./pages/Products";
import Main from "./components/subcomps/Main";
// import Login from "./pages/Login";
// import { users } from "./util/data";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
// import { Button, Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { prodContext } from "./layout/prodContext";

function App() {
  const [refresh, setRefresh] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:2020/products").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
    // console.log(refresh);
  }, [refresh]);

  return (
    <div className="App">
      <Header />
      <div className="mainDisplay">
        <div className="mainDisplayIn">
          <SideMenu />
          <prodContext.Provider value={{ data, setData }}>
            <Routes>
              <Route path="/" element={<Main />} />
              {/* {data && ( */}
              <Route
                path="/products"
                element={<Products setRefresh={setRefresh} myData={data} />}
              />
              {/* )} */}
              <Route path="/orders" element={<Orders />} />
              <Route path="/users" element={<Users />} />
              <Route path="/moderator" element={<Moderator />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </prodContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;

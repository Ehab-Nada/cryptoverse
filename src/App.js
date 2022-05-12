import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout, Typography } from "antd";
import {
  Navbar,
  Homepage,
  Cryptocurrencies,
  CryptoDetails,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />}></Route>
              <Route
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              ></Route>
              <Route path="/crypto/:coinId" element={<CryptoDetails />}></Route>
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Cryptoverse <br />
            All rights reserved
          </Typography.Title>
        </div>
      </div>
    </div>
  );
};

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import CreateUser from "./pages/CreateUser";
import EditUser from "./pages/EditUser";
import ListUser from "./pages/ListUser";
import "./styles/styles.scss";

const App = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "../components/LandingPage/LandingPage"
import ServantsPage from "../components/ServantsPage/ServantsPage";
import GrandOrders from "../components/GrandOrders/GrandOrders";

export default function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/Servants" element={<ServantsPage />} />
        <Route exact path="/GrandOrders" element={<GrandOrders />} />
      </Routes>
    </>
  );
}

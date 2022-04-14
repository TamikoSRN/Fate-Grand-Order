import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../components/LandingPage/LandingPage";
import ServantsPage from "../components/ServantsPage/ServantsPage";
import ServantsIdPage from "../components/ServantsIdPage/ServantsIdPage";
import GrandOrders from "../components/GrandOrders/GrandOrders";
import "./App.css";

export default function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/servants" element={<ServantsPage />} />
        <Route exact path="/servants/:id" element={<ServantsIdPage />} />
        <Route exact path="/GrandOrders" element={<GrandOrders />} />
      </Routes>
    </>
  );
}

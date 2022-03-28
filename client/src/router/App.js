import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "../components/LandingPage/LandingPage"
import GrandOrder from "../components/GrandOrder/GrandOrder";

export default function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/grandOrder" element={<GrandOrder />} />
      </Routes>
    </>
  );
}

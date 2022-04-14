import React from "react";
import Fou from "../img/loading.gif";
import "./Loading.css";

export default function LoadingScreen({ setLoading }) {
  return (
    <>
      <div className="woorupape" />
      <div className="fouGif">
        <img src={Fou} alt="" />
      </div>
      
      <div className="numerito">
        {setTimeout(() => {
          setLoading(false);
        }, 1400)}
      </div>
    </>
  );
}

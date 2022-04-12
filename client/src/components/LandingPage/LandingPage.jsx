import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import LoadingScreen from "../Loading/Loading";

import grandOrderLogo from "../img/GrandOrderLogo.png";
import chaldeaLogo from "../img/ChaldeaLogo.png";
import commandSpellMale from "../img/CommandSpellMale.png";
import commandSpellFemale from "../img/CommandSpellFemale.png";

export default function LandingPage() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading === true ? (
        <LoadingScreen setLoading={setLoading} />
      ) : (
        <div className="landingWallpaper">
          <section className="container">
            <div className="commandSpells">
              <Link to="/">
                <img
                  src={commandSpellMale}
                  className="commandSpellMale"
                  alt=""
                />
              </Link>
              <Link to="/">
                <img
                  src={commandSpellFemale}
                  className="commandSpellFemale"
                  alt=""
                />
              </Link>
              <Link to="/" style={{ textDecoration: "none" }}>
                <h3>Fate/Grand Order APP</h3>
              </Link>
            </div>
          </section>
          
          <section className="landingBody">
            <Link to="/grandOrders">
              <img src={chaldeaLogo} className="chaldeaLogo" alt="" />
            </Link>
            <Link to="/Servants">
              <img src={grandOrderLogo} className="grandOrderLogo" alt="" />
            </Link>
          </section>
        </div>
      )}
    </>
  );
}

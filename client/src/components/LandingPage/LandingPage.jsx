import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

import grandOrderLogo from "../img/GrandOrderLogo.png";
import chaldeaLogo from "../img/ChaldeaLogo.png";
import commandSpellMale from "../img/CommandSpellMale.png";
import commandSpellFemale from "../img/CommandSpellFemale.png";

export default function LandingPage() {
  return (
    <>
      <div className="wallpaper">
        <section className="container">
          <div className="commandSpells">
            <Link to="/">
              <img src={commandSpellMale} className="commandSpellMale" alt="" />
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

          <div className="searchInput">
            <form>
              <input type="text" placeholder="Summon your servant!" />
              <button className="btn" type="submit">
                Summon!
              </button>
            </form>
          </div>
        </section>

        <section className="landingBody">
          <Link to="/">
            <img src={chaldeaLogo} className="chaldeaLogo" alt="" />
          </Link>
          <Link to="/grandOrder">
            <img src={grandOrderLogo} className="grandOrderLogo" alt="" />
          </Link>
        </section>
      </div>
    </>
  );
}

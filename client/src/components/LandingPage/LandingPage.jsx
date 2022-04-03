import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getServants } from "../../store/actions";
import "./LandingPage.css";
import Pagination from "../Pagination/Pagination";
import Card from "../servantCard/servantCard";

import grandOrderLogo from "../img/GrandOrderLogo.png";
import chaldeaLogo from "../img/ChaldeaLogo.png";
import commandSpellMale from "../img/CommandSpellMale.png";
import commandSpellFemale from "../img/CommandSpellFemale.png";

export default function LandingPage() {
  const dispatch = useDispatch();
  const allServants = useSelector((state) => state.servants);

  const [currentPage, setCurrentPage] = useState(1);
  const [servantsPerPage, setServantsPerPage] = useState(8);

  const indexOfLastServant = currentPage * servantsPerPage; // 1*8
  const indexOfFirstServant = indexOfLastServant - servantsPerPage; // 8 - 8
  const currentServants = allServants.slice(
    indexOfFirstServant,
    indexOfLastServant
  );

  useEffect(() => {
    dispatch(getServants());
  }, []);

  const pagination = (numberOfPage) => {
    setCurrentPage(numberOfPage);
  };

  const lastPage = allServants.length / servantsPerPage;

  const nextPage = () => {
    if (currentPage < lastPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

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
        <div className="positions">
          {currentServants?.map((e) => {
            return (
              <Card
                id={e.id}
                name={e.name}
                className={e.className}
                rarity={e.rarity}
                lvMax={e.lvMax}
              />
            );
          })}
        </div>
        <Pagination
          dogsPerPage={servantsPerPage}
          allDogs={allServants.length}
          pagination={pagination}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </div>
    </>
  );
}

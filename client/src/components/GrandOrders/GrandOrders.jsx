import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGrandOrders } from "../../store/actions";
import SingularityCard from "../SingularityCard/SingularityCard";
import Pagination from "../Pagination/Pagination";
import "./GrandOrders.css";
import BB from "../img/BB.png";

export default function GrandOrder() {
  const dispatch = useDispatch();

  const allSingularity = useSelector((state) => state.grandOrders);

  const [currentPage, setCurrentPage] = useState(1);
  const [singularityPerPage, setSigunlarityPerPage] = useState(10);

  const indexOfLastSingularity = currentPage * singularityPerPage; // 1*8
  const indexOfFirstSingularity = indexOfLastSingularity - singularityPerPage; // 8 - 8
  const currentSingularities = allSingularity.slice(
    indexOfFirstSingularity,
    indexOfLastSingularity
  ); // corto el array de 0 a 7

  useEffect(() => {
    dispatch(getGrandOrders);
  }, []);

  const pagination = (numberOfPage) => {
    setCurrentPage(numberOfPage)
  }

  const lastPage = allSingularity.length / singularityPerPage 

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
    <div className="background">

      <div className="singularities">
        {currentSingularities?.map((e) => {
          return (
            <Fragment>
              <SingularityCard
              id={e.id}
              banner={e.banner}
              originalLongName={e.originalLongName}
              age={e.age}
              />
            </Fragment>
          );
        })}
      </div>
      <div className="BB">
        <img src={BB}></img>
        <p className="text">umu it seems like this page's not working right,</p>
        <p className="text"> se-n-pa-i~  ♡ </p>
      </div>
      <Pagination
  singularityPerPage={singularityPerPage}
  allSingularity={allSingularity.length}
  pagination={pagination}
  prevPage={prevPage}
  nextPage={nextPage}
  /> 
    </div>
  );
}

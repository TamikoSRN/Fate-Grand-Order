import React from "react";
import "./Pagination.css"

export default function Pagination ({servantsPerPage, allServants, pagination, prevPage, nextPage}){
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(allServants/servantsPerPage); i++){
        pageNumbers.push(i)
    }
    return(
        <nav>
            <ul className="Pagination_ul">
                { pageNumbers?.map(number => (
                    <button onClick={() => pagination(number)} className="Pagination__Button">{number}</button>
                    ))}
            </ul>
            <div className="buttons">
            <button className="backButton" onClick={prevPage}>Back</button>
            <button className="advanceButton" onClick={nextPage}>Next</button>
            </div>
        </nav>
    )
}
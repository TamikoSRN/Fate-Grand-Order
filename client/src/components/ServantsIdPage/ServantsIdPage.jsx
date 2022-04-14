import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getServantsById } from "../../store/actions";
import LoadingScreen from "../Loading/Loading";
import "./ServantsIdPage.css";

export default function ServantsIdPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getServantsById(id));
  }, []);

  const selectedServant = useSelector((state) => state.servantsId);
  return (
    <>
      <div className="servantsIdWallpaper" />
      <div>
        {selectedServant.length > 0 && loading !== true ? (
          <div className="ServantCard-container">
            <h1 className="servantName">{selectedServant[0].name}</h1>
            <h2 className="servantClass">{selectedServant[0].className}</h2>
            <h3 className="servantRarity">{selectedServant[0].rarity}</h3>

          </div>
        ) : (
          <LoadingScreen setLoading={setLoading} />
        )}
        <div className="servantImage">
        <img
              src={
                selectedServant[0].extraAssets.charaGraph.ascension[4]
                  ? selectedServant[0].extraAssets.charaGraph.ascension[4]
                  : selectedServant[0].extraAssets.charaGraph.ascension[0]
              }
              alt=""
              width="auto"
              height="auto"
            />

        </div>
      </div>
    </>
  );
}

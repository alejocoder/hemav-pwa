import React, { useContext } from "react";
import "./styles.css"
import { AppContext } from "../../context/appContext";

export const Card = ({ imageSrc, name, status, ID }) => {
  const {setSelectedCharacterID} = useContext(AppContext);



    return (
      <div className="card">
        <img className="card-image" src={imageSrc} alt={name} />
        <div className="card-info">
          <h2 className="card-name">{name}</h2>
          <p className="card-status">{status}</p>
        </div>
        <button 
          className="select-button"
          onClick={() => {setSelectedCharacterID(ID)}}
          >Select</button>
      </div>
    );
  };

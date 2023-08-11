import React, { useContext, useEffect, useState } from "react";
import "./styles.css";
import { AppContext } from "../../context/appContext";

export const CharacterDetail = () => {

  const [selectedCharacter, setSelectedCharacter] = useState([])

  const {selectedCharacterID} = useContext(AppContext);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${selectedCharacterID}`
      );
      const data = await response.json();
      setSelectedCharacter(data);
      console.log(data);
    }

    fetchData();
  }, [selectedCharacter, selectedCharacterID]);

  return (
    <div className="character-card">
      <img className="character-image" src={selectedCharacter.image} alt={selectedCharacter.name} />
      <div className="character-info">
        <h2 className="character-name">{selectedCharacter.name}</h2>
        <p className="character-details">Status: {selectedCharacter.status}</p>
        <p className="character-details">Species: {selectedCharacter.species}</p>
        <p className="character-details">Gender: {selectedCharacter.gender}</p>
      </div>
    </div>
  );
};

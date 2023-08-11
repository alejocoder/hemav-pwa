import React, { useContext, useEffect, useState } from "react";
import { Card } from "../Card";
import "./styles.css"; // Make sure to adjust the path to your CSS file
import { AppContext } from "../../context/appContext";

export const CharacterList = () => {
  const [data, setData] = useState([]);
  const {pageNumber, setPageNumber} = useContext(AppContext);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${pageNumber}`
      );
      const data = await response.json();
      setData(data.results);
      console.log(data.results);
    }

    fetchData();
  }, [pageNumber]);

  return (
    <div className="card-container">
      <div className="pagination">
        <button
          className="select-button"
          onClick={() => setPageNumber(pageNumber - 1)}
          disabled={(pageNumber === 1) ? true : false}
        >
          {(pageNumber === 1) ? "Deshabilitado" : "Previous Page"}
        </button>
        <h1>Character List</h1>
        <p>Current Page: {pageNumber}</p>
        <button
          className="select-button"
          onClick={() => setPageNumber(pageNumber + 1)}
        >
          Next Page
        </button>
      </div>
      <div className="card-list">
        {data.map((item, index) => (
          <Card
            key={item.id}
            imageSrc={item.image}
            name={item.name}
            status={item.status}
            ID={item.id}
          />
        ))}
      </div>
    </div>
  );
};

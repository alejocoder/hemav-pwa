import { createContext, useState } from "react";
import React from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [selectedCharacterID, setSelectedCharacterID] = useState(1);
    const [pageNumber, setPageNumber] = useState(1);


  return (
    <AppContext.Provider
      value={{
        selectedCharacterID,
        setSelectedCharacterID,
        pageNumber,
        setPageNumber
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
"use client";

import { createContext, useContext, useState } from "react";

const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <HeaderContext.Provider value={{ isHovered, setIsHovered }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeader = () => useContext(HeaderContext);

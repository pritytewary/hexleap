"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const AccentContext = createContext({
  isDarkMode: true,
  toggleDarkMode: () => {},
});

export const useAccent = () => useContext(AccentContext);

export const AccentProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle the dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Define the accent value
  const accentValue = {
    isDarkMode,
    toggleDarkMode,
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <AccentContext.Provider value={accentValue}>
      {children}
    </AccentContext.Provider>
  );
};

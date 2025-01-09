import React, { createContext, useState, useContext, ReactNode } from "react";

interface BackgroundTheme {
  color: string;
}

export interface BackgroundThemeContextType {
  backgroundTheme: BackgroundTheme;
  toggleBackgroundTheme: () => void;
}

const BackgroundThemeContext = createContext<BackgroundThemeContextType | undefined>(undefined);

interface BackgroundThemeContextProviderProps {
  children: ReactNode;
}

export const BackgroundThemeContextProvider: React.FC<BackgroundThemeContextProviderProps> = ({ children }) => {
  const [backgroundTheme, setBackgroundTheme] = useState<BackgroundTheme>({ color: "bg-white" });
  const toggleBackgroundTheme = () => {
    setBackgroundTheme((prev) => ({
      color: prev.color === "bg-white" ? "bg-black" : "bg-white",
    }));
  };

  return (
    <BackgroundThemeContext.Provider value={{ backgroundTheme, toggleBackgroundTheme }}>
      {children}
    </BackgroundThemeContext.Provider>
  );
};

export const useBackgroundTheme = (): BackgroundThemeContextType => {
  const context = useContext(BackgroundThemeContext);
  if (!context) {
    throw new Error("useBackgroundTheme must be used within a BackgroundThemeContextProvider");
  }
  return context;
};

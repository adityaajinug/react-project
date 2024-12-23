import React, { createContext, useState, ReactNode } from "react";

interface Theme {
  name: string;
  color: string;
}

export interface ThemeContextType {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: { name: "theme-green", color: "#299D91" },
    setTheme: () => {}
  });

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>({ name: "theme-green", color: "#299D91" });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

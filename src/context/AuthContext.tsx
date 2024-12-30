import React, { createContext, useState, useEffect, ReactNode } from "react";
import { jwtDecode } from "jwt-decode";
interface AuthContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  login: (token: string, name: string) => void;
  logout: () => void;
}

const INITIAL_STATE = localStorage.getItem("refreshToken") ? true : false;

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(INITIAL_STATE);
  const [name, setName] = useState<string>("");

  const login = (token: string, userName: string) => {
    localStorage.setItem("refreshToken", token);
    setName(userName);
  };

  const logout = () => {
    localStorage.removeItem("refreshToken");
    setName("");
  };

  useEffect(() => {
    const token = localStorage.getItem("refreshToken");
    if (token) {
      try {
        const decodedToken: any = jwtDecode(token);
        setName(decodedToken.name || "");
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, name, setName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

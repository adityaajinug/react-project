import React, { createContext, useState, useContext, ReactNode } from "react";

interface MessageType {
  severity?: "success" | "error" | "info" | "warning"; 
  message: string; 
  desc?: string; 
}
interface NotifContextType {
  msg: MessageType | undefined;
  setMsg: React.Dispatch<React.SetStateAction<MessageType | undefined>>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const NotifContext = createContext<NotifContextType | undefined>(undefined);

interface NotifContextProviderProps {
  children: ReactNode;
}

export const NotifContextProvider: React.FC<NotifContextProviderProps> = ({ children }) => {
  const [msg, setMsg] = useState<MessageType | undefined>(undefined);
  const [open, setOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <NotifContext.Provider value={{ msg, setMsg, open, setOpen, isLoading, setIsLoading }}>
      {children}
    </NotifContext.Provider>
  );
};

// Custom hook to access NotifContext
export const useNotif = (): NotifContextType => {
  const context = useContext(NotifContext);
  if (context === undefined) {
    throw new Error("useNotif must be used within a NotifContextProvider");
  }
  return context;
};
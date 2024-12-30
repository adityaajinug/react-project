import React, { createContext, useState, ReactNode } from "react";

interface NotifContextType {
  msg: string | undefined;
  setMsg: React.Dispatch<React.SetStateAction<string | undefined>>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
export const NotifContext = createContext<NotifContextType | undefined>(undefined);

interface NotifContextProviderProps {
  children: ReactNode;
}

export const NotifContextProvider: React.FC<NotifContextProviderProps> = ({ children }) => {
  const [msg, setMsg] = useState<string | undefined>(undefined);
  const [open, setOpen] = useState<boolean>(true);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <NotifContext.Provider value={{ msg, setMsg, open, setOpen, isLoading, setIsLoading }}>
      {children}
    </NotifContext.Provider>
  );
};

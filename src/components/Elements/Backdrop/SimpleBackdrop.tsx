import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";

interface SimpleBackdropProps {
  isLoading?: boolean;
  setIsLoading?: (value: boolean) => void;
}

export const SimpleBackdrop: React.FC<SimpleBackdropProps> = (props) => {
  const { isLoading = false, setIsLoading } = props; // Default `isLoading` to `false`

  const handleClose = () => {
    if (setIsLoading) {
      setIsLoading(false); // Close Backdrop by setting isLoading to false
    }
  };

  return (
    <Backdrop
      sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
      open={isLoading} 
      onClick={handleClose}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

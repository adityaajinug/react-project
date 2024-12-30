import { Backdrop, CircularProgress } from '@mui/material';
import React from 'react';

interface SimpleBackdropProps {
    isLoading?: any;
    setIsLoading?: any;
}

export const SimpleBackdrop: React.FC<SimpleBackdropProps> = (props) => {
  const { isLoading, setIsLoading } = props;

  return (
    <>
        <Backdrop
            sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
            open={isLoading}
            >
            <CircularProgress color="inherit" />
        </Backdrop>
    </>
  )
}

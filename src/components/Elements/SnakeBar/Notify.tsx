import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

interface NotifyProps {
  openSnackbar: boolean;
  snackbarSeverity: "success" | "error" | "warning" | "info";
  snackbarMessage: string;
  onClose: () => void;
}

export const Notify: React.FC<NotifyProps> = ({
  openSnackbar,
  snackbarSeverity,
  snackbarMessage,
  onClose,
}) => {
  return (
    <Snackbar
      open={openSnackbar}
      autoHideDuration={6000}
      onClose={onClose}
    >
      <Alert
        onClose={onClose}
        severity={snackbarSeverity}
        sx={{ width: "100%" }}
      >
        {snackbarMessage}
      </Alert>
    </Snackbar>
  );
};

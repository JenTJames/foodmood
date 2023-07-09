import { useEffect, useState } from "react";

import { Alert, Snackbar } from "@mui/material";

import Portal from "../components/Portal";

const Toast = ({ data }) => {
  const [toastData, setToastData] = useState(null);

  useEffect(() => {
    setToastData({
      severity: data.severity,
      message: data.message,
    });
  }, [data]);

  const handleClose = (_, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setToastData(null);
  };

  return (
    <Portal>
      {toastData && (
        <Snackbar
          open={toastData}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity={toastData?.severity}>
            {toastData?.message}
          </Alert>
        </Snackbar>
      )}
    </Portal>
  );
};

export default Toast;

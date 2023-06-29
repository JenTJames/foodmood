import { Button } from "@mui/material";
const AppButton = ({
  children,
  variant,
  size,
  color = "primary",
  bold = false,
}) => {
  return (
    <Button
      color={color}
      disableElevation
      size={size}
      variant={variant}
      sx={{
        fontWeight: bold ? 600 : 500,
      }}
    >
      {children}
    </Button>
  );
};

export default AppButton;

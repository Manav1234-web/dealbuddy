import { ButtonBase, ButtonBaseProps, useTheme } from "@mui/material";
import React, { ReactNode } from "react";

export interface CommonButtonBaseProps extends ButtonBaseProps {
  children?: ReactNode;
  startIcon?: ReactNode; // Added startIcon prop
}

const CommonButtonBase: React.FC<CommonButtonBaseProps> = ({
  children,
  startIcon,
  ...props
}) => {
  const theme = useTheme();

  return (
    <ButtonBase
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        padding: theme.spacing(1),
        borderRadius: theme.shape.borderRadius,
        display: "flex",
        alignItems: "center",
        marginRight: 5,
      }}
      {...props}
    >
      {startIcon && <span style={{ marginRight: 8 }}>{startIcon}</span>}
      {children}
    </ButtonBase>
  );
};

export default CommonButtonBase;

// #43DF9AOD

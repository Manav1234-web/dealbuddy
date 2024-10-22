import { Button, ButtonProps, useTheme } from "@mui/material";
import { extend } from "lodash";
import { title } from "process";
import React, { ReactNode } from "react";
export interface CommonButtonProps extends ButtonProps {
  children?: ReactNode;
}

const CommonButton = ({ children, ...props }: CommonButtonProps) => {
  const theme = useTheme();
  return (
    <Button
      sx={{
        color: theme.palette.common.white,
        display: "flex",
        margin: "6px 0 6px 14px",   
        alignItems: "center",
        background:
          "linear-gradient(107.73deg, #43df9a 13.88%, #03b465 87.89%) !important",
        borderRadius: "5px",
        border: "none",
        padding: "10px 24px",
        lineHeight: 1.4,
        fontWeight: 500,
        fontSize: "14px",
        "&:hover": {
          background:
            "linear-gradient(109.06deg, #faf57e 12.84%, #fef400 87.16%) !important",
            color:"black",
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CommonButton;

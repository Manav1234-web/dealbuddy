import { Components, Theme } from "@mui/material";

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
     gradient: true;
  }
  interface ButtonPropsColorOverrides {
    grey: true;

  }

}

export const LoadingButtonStyle: any = {
  MuiLoadingButton: {
    defaultProps: {
      variant: '500',
      disableElevation: true,
    },
  }
}

export const ButtonStyle: Components<Theme> = {
  ...LoadingButtonStyle,
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 8,
      },
    },
  }
}
